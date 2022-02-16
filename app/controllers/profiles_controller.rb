# frozen_string_literal: true

class ProfilesController < Devise::RegistrationsController
  include ApiResponders

  prepend_before_action :authenticate_scope!, only: :update
  before_action :load_resource

  def update
    if resource.update_with_password(update_params)
      bypass_sign_in resource, scope: :user
      respond_with_success(t("successfully_updated", entity: "User profile"), :ok, { user: resource })
    else
      respond_with_error(resource.errors_to_sentence)
    end
  end

  def update_email
    if resource.update_with_password(update_params)
      sign_out(resource)
      respond_with_success(t("successfully_updated", entity: "Email"))
    else
      respond_with_error(resource.errors_to_sentence)
    end
  end

  private

    def update_params
      resource_params.permit(:email, :current_password, :first_name, :last_name)
    end

    def resource_params
      params.require(:user)
    end

    def load_resource
      self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    end
end
