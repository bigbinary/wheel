# frozen_string_literal: true

module Loggable
  extend ActiveSupport::Concern

  private

    def log_exception(exception)
      Rails.logger.info exception.class.to_s
      Rails.logger.info exception.to_s
      Rails.logger.info exception.backtrace.join("\n")
    end
end
