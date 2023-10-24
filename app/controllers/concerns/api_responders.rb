# frozen_string_literal: true

module ApiResponders
  extend ActiveSupport::Concern

  private

    def render_error(message, status = :unprocessable_entity, context = {})
      is_message_array = message.is_a?(Array)
      error_message = is_message_array ? message.to_sentence : message
      render status:, json: { error: error_message }.merge(context)
    end

    def render_message(message, status = :ok, context = {})
      render status:, json: { notice: message }.merge(context)
    end

    def render_json(json = {}, status = :ok)
      render status:, json:
    end
end
