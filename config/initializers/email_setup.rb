ActionMailer::Base.default_url_options[:host] = Rails.application.secrets.host

ActionMailer::Base.delivery_method = Rails.application.secrets.mailer_delivery_method

if ActionMailer::Base.delivery_method == :smtp
  ActionMailer::Base.smtp_settings = Rails.application.secrets.mailer[:smtp_settings].symbolize_keys
end
