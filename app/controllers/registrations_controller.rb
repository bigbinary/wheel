# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  prepend_before_action :authenticate_scope!, only: [:edit, :update, :update_password, :destroy]
  before_action :load_resource, only: [:update_password]

  def update_password
    if update_resource(resource, password_update_params)
      if is_flashing_format?
        set_flash_message :notice, :updated
        bypass_sign_in(resource)
        respond_with(resource, location: after_update_path_for(resource))
      end
    else
      clean_up_passwords resource
      render json: { error: "Couldnt' update the password! Please try again." }, status: 422
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
