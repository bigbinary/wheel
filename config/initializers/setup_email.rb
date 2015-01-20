ActionMailer::Base.default_url_options[:host] = Settings.host

ActionMailer::Base.delivery_method = Settings.mailer.delivery_method

if Settings.mailer.delivery_method == :smtp
  ActionMailer::Base.smtp_settings = Settings.mailer.smtp_settings
end

interceptor = MailInterceptor::Interceptor.new({ forward_emails_to: Settings.intercept_and_forward_emails_to,
                                                 deliver_emails_to: ["@company.com"],
                                                 subject_prefix: Settings.subject_prefix_for_outgoing_emails })
ActionMailer::Base.register_interceptor(interceptor)
