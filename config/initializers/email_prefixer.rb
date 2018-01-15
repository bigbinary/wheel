# frozen_string_literal: true

EmailPrefixer.configure do |config|
  config.application_name = Rails.application.secrets.subject_prefix_for_outgoing_emails
  config.stage_name = Rails.env
end
