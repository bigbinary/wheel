# frozen_string_literal: true

if Rails.env.development?
  Rails.application.config.action_mailer.delivery_method = :letter_opener
  Rails.application.config.action_mailer.perform_deliveries = true
end

ActionMailer::Base.default_url_options[:host] = Rails.application.secrets.host
ActionMailer::Base.default_url_options[:from] = Rails.application.secrets.mailer_default_from_email

ActionMailer::Base.asset_host = Rails.application.secrets.host
ActionMailer::Base.delivery_method = Rails.application.secrets.mailer_delivery_method

if ActionMailer::Base.delivery_method == :smtp
  ActionMailer::Base.smtp_settings = Rails.application.secrets.mailer[:smtp_settings].symbolize_keys
end

if Rails.env.production?
  if Rails.application.secrets.host.blank?
    raise "URLs in email use Rails.application.secrets.host. This is not set. Please fix it"
  end
end
