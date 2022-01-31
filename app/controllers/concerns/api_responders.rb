# frozen_string_literal: true

module ApiResponders
  extend ActiveSupport::Concern

  private

    def respond_with_error(message, status = :unprocessable_entity, context = {})
      is_message_array = message.is_a?(Array)
      error_message = is_message_array ? message.to_sentence : message
      render status: status, json: { error: error_message }.merge(context)
    end

    def respond_with_success(message, status = :ok, context = {})
      render status: status, json: { notice: message }.merge(context)
    end

    def respond_with_message(message, status = :ok, context = {})
      render status: status, json: { message: message }.merge(context)
    end
end
