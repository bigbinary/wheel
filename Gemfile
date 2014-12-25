source 'https://rubygems.org'

ruby '2.1.5'

gem 'rails', '4.1.8'
gem 'arel'
gem 'jquery-rails'
gem 'sprockets-rails', '~> 2.0'
gem 'sass-rails',   github: 'rails/sass-rails'
gem 'uglifier', '>= 1.0.3'

# database
gem 'pg'

# for building JSON
gem 'jbuilder', '~> 1.2'

# for authentication
gem 'devise', '3.2.3'

# for sending devise emails in background
gem 'devise-async'

# for background job processing
gem 'delayed_job_active_record'

# web interface for delayed job
gem 'delayed_job_web', '>= 1.2.0'

# collection of handy tools
gem 'handy'

# for error tracking
gem 'honeybadger'

# use bootstrap3
gem 'twitter-bootstrap-rails'

# forms made easy for rails
gem 'simple_form'

# admin framework
gem 'activeadmin', github: 'gregbell/active_admin'

# for handling file uploads
gem 'carrierwave'

# for logging to work in heroku
gem 'rails_12factor'

# for email validation
gem 'email_validator'

# For variants support
gem 'browser'

# Haml as templating engine
gem 'haml-rails'

group :development do
  # HTTP server for Rack applications
  gem 'thin'

  # mutes assets pipeline log messages
  gem 'quiet_assets'

  # speeds up development by keeping your application running in the background
  gem 'spring'
end

group :test do

  # customizable MiniTest output formats
  gem 'minitest-reporters', require: false

  # for test coverage report
  gem 'simplecov', require: false
end

group :staging, :production do
  # HTTP server for Rack applications
  gem 'unicorn'

  # without this in development default one is used
  gem "unicorn-rails"
end
