# frozen_string_literal: true

if Rails.env.heroku?
  require 'sidekiq/testing'
  Sidekiq::Testing.inline!
end

Sidekiq.configure_server do |config|
  config.redis = {
    host: ENV['REDIS_HOST'] || 'redis',
    port: ENV['REDIS_PORT'] || '6379'
  }
end

Sidekiq.configure_client do |config|
  config.redis = {
    host: ENV['REDIS_HOST'] || 'redis',
    port: ENV['REDIS_PORT'] || '6379'
  }
end
