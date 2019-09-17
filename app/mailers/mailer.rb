# frozen_string_literal: true

class Mailer < ActionMailer::Base
  layout "mailer"

  default from: Rails.application.secrets.mailer_default_from_email

  default_url_options[:host] = Rails.application.secrets.host

  def contact_us_email(contact_details)
    @email = email
    @title = title
    @body  = body
    subject = "Contact us message from #{@email}"
    mail(to: "abc@gmail.com", from: @email,  subject: subject) do |format|
      format.html
    end
  end
end
