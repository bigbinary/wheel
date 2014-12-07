class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_honeybadger_context
  before_action :set_device_type
  before_action :set_layout_carrier

  private

  def ensure_current_user_is_superadmin!
    authenticate_user!

    unless current_user.super_admin?
      redirect_to root_path, status: :forbidden, alert: "Unauthorized Access!"
    end
  end

  def set_device_type
    request.variant = :phone if browser.mobile?
  end

  def set_honeybadger_context
    hash = { uuid: request.uuid }
    hash.merge!(user_id: current_user.id, user_email: current_user.email) if current_user
    Honeybadger.context hash
  end

  def set_layout_carrier
    @layout_carrier = LayoutCarrier.new
  end

end
