# frozen_string_literal: true

if Rails.env.heroku?
    require 'sidekiq/testing'
    Sidekiq::Testing.inline!
 end