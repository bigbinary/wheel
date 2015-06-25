class Api::V1::UsersController < Api::V1::BaseController

  skip_before_action :authenticate_user!, only: [:create]
  skip_before_action :authenticate_user_using_x_auth_token, only: [:create]

  def show
    @user = User.find_by(email: params[:id])

    if @user
      render json: @user
    else
      respond_with_error "User with email #{params[:id]} not found.", :not_found
    end
  end

  def create
    @user = User.create user_params

    if @user.valid?
      render json: @user
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    @user = User.find_by(email: params[:id])

    if @user.blank?
      respond_with_error "User with email #{params[:id]} not found.", :not_found

    elsif @user.update_attributes(user_params)
      render json: @user

    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    @user = User.find_by(email: params[:id])

    if @user.blank?
      respond_with_error "User with email #{params[:id]} not found.", :not_found

    elsif @user.destroy
      render json: @user

    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :password_confirmation)
  end

end
