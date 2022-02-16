# frozen_string_literal: true

module SetHoneyBadgerContext
  extend ActiveSupport::Concern

  included do
    before_action :set_honeybadger_context
  end

  private

    def set_honeybadger_context
      hash = { uuid: request.uuid }
      hash.merge!(user_id: current_user.id, user_email: current_user.email) if current_user
      Honeybadger.context hash
    end
end
