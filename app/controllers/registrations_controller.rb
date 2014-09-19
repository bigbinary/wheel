class RegistrationsController < Devise::RegistrationsController

  before_action :load_resource, only: [:edit_password, :update_password]

  def edit_password
    respond_with resource
  end

  def update_password
    if update_resource(resource, password_update_params)
      if is_flashing_format?
        set_flash_message :notice, :updated
        sign_in(resource_name, resource, bypass: true)
        respond_with(resource, location: after_update_path_for(resource))
      end
    else
      clean_up_passwords resource
      respond_with(resource, action: 'edit_password')
    end
  end

  private

  def sign_up_params
    resource_params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end

  def account_update_params
    resource_params.permit(:email, :current_password, :first_name, :last_name, :profile_image)
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
