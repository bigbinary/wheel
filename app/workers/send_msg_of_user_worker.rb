# frozen_string_literal: true

class SendMsgOfUserWorker
  include Sidekiq::Worker

  def perform(title, email, body)
    Mailer.contact_us_notification(title, email, body).deliver_now
  end
end
