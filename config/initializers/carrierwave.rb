require 'carrierwave/orm/activerecord'

def setup_for_storing_assets_in_file_system
  CarrierWave.configure do |config|
    config.permissions           = 0600
    config.directory_permissions = 0700
    config.storage               = :file
    config.asset_host            = Rails.application.secrets.host
  end
end

def setup_for_storing_assets_in_test_env
  CarrierWave.configure do |config|
    config.root              = Rails.root.join('tmp')
    config.storage           = :file
    config.enable_processing = false
  end
end

def setup_for_storing_assets_in_s3
  CarrierWave.configure do |config|
    config.root            = Rails.root.join('tmp')
    config.fog_credentials = {
        provider:              'AWS',
        aws_access_key_id:     Rails.application.secrets.aws_s3['access_key_id'],
        aws_secret_access_key: Rails.application.secrets.aws_s3['secret_access_key'],
        region:                'us-west-2'
    }
    config.fog_directory   = Rails.application.secrets.aws_s3['bucket_name']
    config.fog_public      = true
    config.fog_attributes  = { 'Cache-Control' => 'max-age=315576000' }
    config.storage         = :fog
    config.cache_dir       = 'carrierwave'
  end
end

if Rails.env == 'test'
  setup_for_storing_assets_in_test_env
else
  case Rails.application.secrets.store_uploaded_assets_in
    when 'aws_s3'
      setup_for_storing_assets_in_s3
    when 'filesystem'
      setup_for_storing_assets_in_file_system
    else
      raise "Please configure 'store_uploaded_assets_in' in config/secrets.yml"
  end
end
