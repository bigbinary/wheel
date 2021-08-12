# frozen_string_literal: true

Redis.exists_returns_integer = true

if Rails.env.heroku?
  require "sidekiq/testing"
  Sidekiq::Testing.inline!
end

if Rails.env.test?
  Sidekiq.logger.level = Logger::WARN
end

Sidekiq::Extensions.enable_delay!

Sidekiq.configure_server do |config|
  config.redis = { url: Rails.application.secrets.redis_url, size: 9 }
  schedule_file = Rails.root.join("config/schedule.yml")

  if File.exists?(schedule_file)
    Sidekiq::Cron::Job.load_from_hash! YAML.load_file(schedule_file)
  end
end

Sidekiq.configure_client do |config|
  config.redis = { url: Rails.application.secrets.redis_url, size: 1 }
end
