Devise::Async.setup do |config|
  config.backend = :delayed_job
  config.priority = -1
end