# frozen_string_literal: true

def secure_compare(string, key)
  ActiveSupport::SecurityUtils.secure_compare(
    ::Digest::SHA256.hexdigest(string),
    ::Digest::SHA256.hexdigest(Rails.application.secrets.sidekiq[key])
  )
end

require "sidekiq/web"
mount Sidekiq::Web => "/sidekiq"

if ["staging", "production"].include?(Rails.env)
  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
    secure_compare(username, :username) & secure_compare(password, :password)
  end
end
