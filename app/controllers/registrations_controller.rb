# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  prepend_before_action :authenticate_scope!, only: [:update]
  before_action :load_resource, only: [:update]

  def update
    if resource.update_with_password(account_update_params)
      bypass_sign_in resource, scope: :user
      render status: :ok, json: { notice: "User profile has been successfully updated" }
    else
      clean_up_passwords resource
      render status: :unprocessable_entity, json: { error: "Couldn't update the user profile! Please try again." }
    end
  end

  private

    def account_update_params
      resource_params.permit(:email, :current_password, :first_name, :last_name)
    end

    def resource_params
      params.require(:user)
    end

    def load_resource
      self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    end
end
