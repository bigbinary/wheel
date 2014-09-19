class EmailInterceptor
  def self.delivering_email(message)
    message.to = Settings.intercepted_emails
  end
end

ActionMailer::Base.register_interceptor(EmailInterceptor) unless Rails.env.production?
