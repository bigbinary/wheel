# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.7.2"

gem "rails", "~> 6.0.3.4"
gem "sprockets", "~> 3.7.2"

# friends of Rails
gem "jquery-rails"
gem "sprockets-rails"
gem "sass-rails", ">= 6"
gem "uglifier", ">= 2.7.1"

gem "webpacker", "~> 4.0"

# database
gem "pg"

# Application server
gem "puma", "~> 4.1"

# JSON builder
gem "jbuilder", ">= 2.7"

# Authentication
gem "devise", "~> 4.7"

# Error tracking
gem "honeybadger"

# Fonts
gem "font-awesome-sass", "~> 4.3.0"

# Support cross-browser css compatibilty
gem "autoprefixer-rails", "= 9.7.6"

# Forms made easy for rails
gem "simple_form", "~>5.0"

# Admin framework
gem "activeadmin"

# Email validation
gem "email_validator"

# Templating engine
gem "slim"
gem "slim-rails"

# Intercepts outgoing emails in non-production environment
gem "mail_interceptor", group: [:development, :staging, :heroku]

# Adds prefix to subject in emails
gem "email_prefixer"

# Display notifications
gem "jquery-growl-rails"

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Background jobs
gem "sidekiq"

# Preview email in browser
gem "letter_opener", group: :development


group :development do
  # speeds up development by keeping your application running in the background
  gem "spring"
  gem 'spring-watcher-listen', '~> 2.0.0'

  # A runtime developer console and IRB alternative with powerful introspection capabilities
  gem "pry"

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "web-console", "~> 3.3.0"

  # Reenable after https://github.com/rails/rails/issues/26158 is fixed
  gem "listen", "~> 3.2"

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
  gem "minitest"

  # for test coverage report
  gem "simplecov", require: false

  # Minitest reporter plugin for CircleCI.
  gem "minitest-ci"
end