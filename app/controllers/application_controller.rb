# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include SetHoneyBadgerContext
  include Expirable

  private

    def ensure_current_user_is_superadmin!
      authenticate_user!

      unless current_user.super_admin?
        redirect_to root_path, status: :forbidden, alert: "Unauthorized Access!"
      end
    end
end
