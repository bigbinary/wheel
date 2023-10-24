# frozen_string_literal: true

module ApiRescuable
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :handle_validation_error
    rescue_from ActiveRecord::RecordNotUnique, with: :handle_record_not_unique
    rescue_from ActionController::ParameterMissing, with: :handle_api_error
  end

  private

    def handle_validation_error(exception)
      log_exception(exception)
      render_error(exception.record.errors_to_sentence)
    end

    def handle_record_not_found(exception)
      log_exception(exception)
      render_error(exception.message, :not_found)
    end

    def handle_record_not_unique(exception)
      log_exception(exception)
      render_error(exception.record.errors_to_sentence)
    end

    def handle_api_error(exception)
      log_exception(exception)
      render_error(exception.original_message, :internal_server_error)
    end
end
