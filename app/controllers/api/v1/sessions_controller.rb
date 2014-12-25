class Api::V1::SessionsController < Api::V1::BaseController

  skip_before_action :authenticate_user!
  skip_before_action :authenticate_user_using_x_auth_token

  def create
    user = User.find_for_database_authentication(email: params[:user] && params[:user][:email])
    if invalid_password?(user)
      respond_with_error "Incorrect email or password", 401
    else
      render  json: { auth_token: user.authentication_token }, location: root_path, status: :created
    end
  end

  private

  def invalid_password? user
    user.blank? || !user.valid_password?(params[:user][:password])
  end

end
