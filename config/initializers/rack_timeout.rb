Rack::Timeout::Logger.disable if Rails.env.development?
Rack::Timeout.service_timeout = 30 # seconds
