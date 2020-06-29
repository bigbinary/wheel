# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.7.1"

gem "rails", "~> 6.0.3.2"
gem "sprockets", "~> 3.7.2"

# friends of Rails
gem "jquery-rails"
gem "sprockets-rails"
gem "sass-rails", ">= 5.0.3"
gem "uglifier", ">= 2.7.1"

gem "webpacker", "~> 4.0"

# database
gem "pg"

# JSON builder
gem "jbuilder", ">= 2.2.13"

# Authentication
gem "devise", "~> 4.7"

# Error tracking
gem "honeybadger"

# Bootstrap framework
gem "bootstrap", "~> 4.4.1"

# Fonts
gem "font-awesome-sass", "~> 4.3.0"

# Support cross-browser css compatibilty
gem "autoprefixer-rails"

# Forms made easy for rails
gem "simple_form", "~>5.0"

gem "coffee-script"

# Admin framework
gem "activeadmin"

# Email validation
gem "email_validator"

# Templating engine
gem "slim"
gem "slim-rails"

# Intercepts outgoing emails in non-production environment
gem "mail_interceptor", group: [:development, :staging]

# Adds prefix to subject in emails
gem "email_prefixer"

# Application server
gem "puma", "~> 3.12"

# Rails request timeout, needed if running on Heroku-
# https://devcenter.heroku.com/articles/request-timeout
gem "rack-timeout"

# Display notifications
gem "jquery-growl-rails"

# Faster env load times
gem "bootsnap"

# Background jobs
gem "sidekiq"

group :development do
  # speeds up development by keeping your application running in the background
  gem "spring"

  # A runtime developer console and IRB alternative with powerful introspection capabilities
  gem "pry"

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "web-console", "~> 3.0"

  # Reenable after https://github.com/rails/rails/issues/26158 is fixed
  gem "listen", "~> 3.1.5"

  # reports N+1 queries
  gem "bullet"

  # A Ruby static code analyzer, based on the community Ruby style guide
  gem "rubocop", "~> 0.82.0", require: false
  gem "rubocop-rails"

  # Patch-level verification for Bundler.
  gem "bundler-audit", require: false

  # vulnerabity checker for Ruby itself.
  gem "ruby_audit", require: false
end

group :test do
  # Complete suite of testing facilities
  gem "minitest", "5.10.3"

  # for test coverage report
  gem "simplecov", require: false

  # Minitest reporter plugin for CircleCI.
  gem "minitest-ci"
end