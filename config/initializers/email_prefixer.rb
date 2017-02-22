EmailPrefixer.configure do |config|
  config.stage_name = Rails.application.secrets.subject_prefix_for_outgoing_emails
end
