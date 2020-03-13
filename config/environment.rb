# Load the Rails application.
require_relative 'application'

Rails.application.configure do
  # RAILS_LOG_TO_STDOUT value is set to true by default(heroku)
  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end
end

# Initialize the Rails application.
Rails.application.initialize!
