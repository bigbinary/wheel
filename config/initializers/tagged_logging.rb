if Rails.env.production? || Rails.env.staging?
  Rails.application.config.log_tags = [ :subdomain, :uuid ]
end
