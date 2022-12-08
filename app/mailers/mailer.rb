# frozen_string_literal: true

class Mailer < ActionMailer::Base
  layout "mailer"

  default from: Rails.application.secrets.mailer_default_from_email

  default_url_options[:host] = Rails.application.secrets.host

  def contact_email(title, email, body)
    @email = email
    @title = title
    @body = body
    subject = "Contact us message from #{@email}"
    mail(to: Rails.application.secrets.support_email, from: @email, subject:) do |format|
      format.html
    end
  end
end
