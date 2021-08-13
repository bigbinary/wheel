# frozen_string_literal: true

interceptors = Rails.application.secrets.intercept_and_forward_emails_to || ["incoming@example.com"]

options = {
  forward_emails_to: interceptors,
  deliver_emails_to: ["deliver@bigbinary.com"]
}

unless Rails.env.test? || Rails.env.production?
  interceptor = MailInterceptor::Interceptor.new(options)
  ActionMailer::Base.register_interceptor(interceptor)
end
