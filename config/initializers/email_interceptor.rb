class EmailInterceptor
  def self.delivering_email(message)
    message.to = Settings.intercept_and_forward_emails_to
  end
end

ActionMailer::Base.register_interceptor(EmailInterceptor) if Settings.intercept_and_forward_emails_to.present?
