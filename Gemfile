# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.7.2"

gem "rails", "~> 6.0.3.4"
gem "sprockets"

# friends of Rails
gem "sprockets-rails"
gem "sass-rails", ">= 6"
gem "uglifier", ">= 2.7.1"

gem "webpacker"

# React
gem "react-rails"

# database
gem "pg"

# Application server
gem "puma"

# JSON builder
gem "jbuilder", ">= 2.7"

# Authentication
gem "devise", "~> 4.7"

# Error tracking
gem "honeybadger"

# Fonts
gem "font-awesome-sass"

# Support cross-browser css compatibility
gem "autoprefixer-rails"

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

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.7.4', require: false

# Background jobs
gem "sidekiq"

# Preview email in browser
gem "letter_opener", group: :development

# yanked v0.3.5
gem 'mimemagic', github: 'mimemagicrb/mimemagic', ref: '01f92d86d15d85cfd0f20dabd025dcbd36a8a60f'

group :development, :test do
  # Rails integration for factory-bot
  gem "factory_bot_rails"

  # A runtime developer console and IRB alternative with powerful introspection capabilities
  gem "pry"
end

group :development do
  # speeds up development by keeping your application running in the background
  gem "spring"
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code
  gem "web-console"

  # Reenable after https://github.com/rails/rails/issues/26158 is fixed
  gem "listen", "~> 3.2"

  # reports N+1 queries
  gem "bullet"

  # A Ruby static code analyzer, based on the community Ruby style guide
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false

  # Patch-level verification for Bundler
  gem "bundler-audit", require: false

  # vulnerability checker for Ruby itself
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
