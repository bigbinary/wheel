# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  prepend_before_action :authenticate_scope!, only: [:update_password]
  before_action :load_resource, only: [:update_password]

  def update_password
    if resource.update_with_password(password_update_params)
      bypass_sign_in resource, scope: :user
      render json: { notice: 'Password has been successfully updated' }, status: :ok
    else
      clean_up_passwords resource
      render json: { error: "Couldn't update the password! Please try again." }, status: :unprocessable_entity
    end
  end

  private

    def sign_up_params
      resource_params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
    end

    def account_update_params
      resource_params.permit(:email, :current_password, :first_name, :last_name)
    end

    def password_update_params
      resource_params.permit(:password, :password_confirmation, :current_password)
    end

    def resource_params
      params.require(:user)
    end

    def load_resource
      self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    end
end
