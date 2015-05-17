source 'https://rubygems.org'

ruby '2.2.2'

gem 'rails', '4.2.1'

gem 'arel'
gem 'jquery-rails'

gem 'sprockets-rails', '3.0.0.beta1'
gem 'sass-rails', '>= 3.2'
gem 'uglifier', '>= 1.0.3'

# database
gem 'pg'

# use "strict mode" in JavaScript
gem 'sprockets-strict-mode'

# for building JSON
gem 'jbuilder', '~> 1.2'

# for authentication
gem 'devise', '3.4.1'

# for sending devise emails in background
gem 'devise-async', github: 'mhfs/devise-async'

# for background job processing
gem 'delayed_job_active_record'

# web interface for delayed job
gem 'delayed_job_web', '>= 1.2.0'

# For starting Delayed job background process
gem 'daemons'

# collection of handy tools
gem 'handy'

# for error tracking
gem 'honeybadger'

# use bootstrap3
gem 'bootstrap-sass', '~> 3.3.3'

# use font-awesome
gem 'font-awesome-sass', '~> 4.3.0'

# forms made easy for rails
gem 'simple_form'

# admin framework
gem 'activeadmin', github: 'activeadmin'

# for handling file uploads
gem 'carrierwave'

# for logging to work in heroku
gem 'rails_12factor', group: [:staging, :production]

# for email validation
gem 'email_validator'

# for variants support
gem 'browser'

# haml as templating engine
gem 'haml-rails'

# intercepts outgoing emails in non-production environment
gem 'mail_interceptor', github: 'bigbinary/mail_interceptor', group: [:development, :staging]

# Adds prefix to the subject in emails
gem 'email_prefixer'

# HTTP server for Rack applications for staging and production
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

  # web console
  gem 'web-console', '~> 2.0'
end

group :test do

  # customizable MiniTest output formats
  gem 'minitest-reporters', require: false

  # for test coverage report
  gem 'simplecov', require: false
end
