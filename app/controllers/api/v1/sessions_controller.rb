# frozen_string_literal: true

class Api::V1::SessionsController < Api::V1::BaseController
  skip_before_action :authenticate_user!
  skip_before_action :authenticate_user_using_x_auth_token

  def create
    user = User.find_for_database_authentication(email: session_params[:email])
    if invalid_password?(user)
      render_error(t("invalid_credentials"), :unauthorized)
    else
      sign_in(user)
      render_json({ auth_token: user.authentication_token, user:, is_admin: user.super_admin? }, :created)
    end
  end

  def destroy
    sign_out(@user)
    reset_session
  end

  private

    def session_params
      params.require(:user).permit(:email, :password)
    end

    def invalid_password?(user)
      user.blank? || !user.valid_password?(session_params[:password])
    end
end
