# frozen_string_literal: true

class Api::V1::SessionsController < Api::V1::BaseController
  skip_before_action :authenticate_user!
  skip_before_action :authenticate_user_using_x_auth_token

  def create
    user = User.find_for_database_authentication(email: params[:user] && params[:user][:email])
    if invalid_password?(user)
      respond_with_error "Incorrect email or password", 401
    else
      sign_in(user)
      render status: :created,
        json: { auth_token: user.authentication_token, user: user, is_admin: user.super_admin? }, location: root_path
    end
  end

  def destroy
    sign_out(@user)
    reset_session
  end

  private

    def invalid_password?(user)
      user.blank? || !user.valid_password?(params[:user][:password])
    end
end
