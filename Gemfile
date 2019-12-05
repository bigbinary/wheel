# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.6.5"

gem "rails", "~> 6.0.0"

# friends of Rails
gem "jquery-rails"
gem "sprockets-rails"
gem "sass-rails", ">= 5.0.3"
gem "uglifier", ">= 2.7.1"

# Use Webpack to manage app-like JavaScript modules in Rails
gem "webpacker", "~> 4.0"

# database
gem "pg"

# for building JSON
gem "jbuilder", ">= 2.2.13"

# for authentication
gem "devise", "~> 4.7"

# for error tracking
gem "honeybadger", "~> 3.1"

# for using bootstrap framework
gem "bootstrap", "~> 4.3.1"

# for using font-awesome
gem "font-awesome-sass", "~> 4.3.0"

# Support for cross-browser css compatibilty
gem "autoprefixer-rails"

# forms made easy for rails
gem "simple_form", "~>5.0"

gem "coffee-script"

# admin framework
gem "activeadmin"
# gem 'inherited_resources', github: 'activeadmin/inherited_resources'

# for logging to work in Heroku
gem "rails_12factor", group: [:staging, :production]

# for email validation
gem "email_validator"

# templating engine
gem "slim"

# Slim templates generator for Rails 3, 4 and 5
gem "slim-rails"

# intercepts outgoing emails in non-production environment
gem "mail_interceptor", group: [:development, :staging]

# Adds prefix to subject in emails
gem "email_prefixer"

# application server
gem "puma", "~> 3.12"

# Attach comments to Active Record queries
# gem 'marginalia'

# timeout Rails request, needed if running on Heroku- https://devcenter.heroku.com/articles/request-timeout
gem "rack-timeout"

# for displaying notifications
gem "jquery-growl-rails"

# For faster env load times
gem "bootsnap"

# Simple, efficient background processing for Ruby
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
  gem "rubocop", require: false

  # Patch-level verification for Bundler. https://github.com/rubysec/bundler-audit
  gem "bundler-audit", require: false

  # vulnerabity checker for Ruby itself. https://github.com/civisanalytics/ruby_audit
  gem "ruby_audit", require: false
end

group :test do
  # Complete suite of testing facilities
  gem "minitest", "5.10.3"

  # for test coverage report
  gem "simplecov", require: false

  # Minitest reporter plugin for CircleCI. Gerates JUnit xml reports from tests. https://github.com/circleci/minitest-ci
  gem "minitest-ci"
end