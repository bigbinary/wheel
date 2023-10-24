# frozen_string_literal: true

module Expirable
  extend ActiveSupport::Concern

  included do
    rescue_from ActionController::InvalidAuthenticityToken, with: :ensure_user_is_logged_out_during_session_expiry
  end

  private

    def ensure_user_is_logged_out_during_session_expiry
      render_json({ error: t("session.expiry") }, :unauthorized) and return
    end
end
