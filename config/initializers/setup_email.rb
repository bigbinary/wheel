ActionMailer::Base.default_url_options[:host] = Settings.host

ActionMailer::Base.delivery_method = Settings.mailer.delivery_method

if Settings.mailer.delivery_method == :smtp
  ActionMailer::Base.smtp_settings = Settings.mailer.smtp_settings
end

EmailPrefixer.configure do |config|
  config.application_name = Settings.application_name_in_emails
end
