if Rails.application.secrets.intercept_and_forward_emails_to.present?
  options = { forward_emails_to: Rails.application.secrets.intercept_and_forward_emails_to,
              deliver_emails_to: ['@example.com'] }

  interceptor = MailInterceptor::Interceptor.new(options)
  ActionMailer::Base.register_interceptor(interceptor)
end
