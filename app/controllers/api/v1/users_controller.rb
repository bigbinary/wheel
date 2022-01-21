# frozen_string_literal: true

class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :authenticate_user!, only: [:create]
  skip_before_action :authenticate_user_using_x_auth_token, only: [:create]

  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def show
    if @user
      render json: @user
    else
      respond_with_error "User with id #{params[:id]} not found.", :not_found
    end
  end

  def create
    user = User.create user_params

    if user.valid?
      sign_in(user)
      render status: :ok, json: { user: user, auth_token: user.authentication_token }
    else
      respond_with_error user.errors.full_messages.to_sentence, :unprocessable_entity
    end
  end

  def destroy
    if @user.blank?
      respond_with_error "User with id #{params[:id]} not found.", :not_found
    elsif @user.destroy
      render status: :ok, json: @user
    else
      respond_with_error @user.errors.full_messages.to_sentence, :unprocessable_entity
    end
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :password, :password_confirmation)
    end
end
