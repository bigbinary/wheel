# frozen_string_literal: true

# Following code is disabling Rack Timeout logger.
# Rack Timeout is enabled in development.
Rack::Timeout::Logger.disable if Rails.env.development?

# Rack::Timeout.service_timeout = 30 # seconds
