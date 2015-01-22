source 'https://rubygems.org'

ruby '2.2.0'

gem 'rails', '4.1.8'
gem 'arel'
gem 'jquery-rails'
gem 'sprockets-rails', '~> 2.0'
gem 'sass-rails',   github: 'rails/sass-rails'
gem 'uglifier', '>= 1.0.3'

# database
gem 'pg'

# use "strict mode" in JavaScript
gem 'sprockets-strict-mode'

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

# for variants support
gem 'browser'

# haml as templating engine
gem 'haml-rails'

# intercepts outgoing emails in non-production environment
gem 'mail_interceptor'

# HTTP server for Rack applications for staginng and production
# See https://github.com/bigbinary/wheel/issues/43 for why unicorn is
# not used in development.
gem 'unicorn', group: [:staging, :production]

group :development do

  # application server for development
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
