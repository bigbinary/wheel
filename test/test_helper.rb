# frozen_string_literal: true

def enable_test_coverage
  require "simplecov"
  require "pry"

  SimpleCov.start do
    add_filter "/test/"

    add_group "Models", "app/models"
    add_group "Mailers", "app/mailers"
    add_group "Controllers", "app/controllers"
    add_group "Uploaders", "app/uploaders"
    add_group "Helpers", "app/helpers"
    add_group "Workers", "app/workers"
    add_group "Services", "app/services"
  end
end

enable_test_coverage if ENV["COVERAGE"]

ENV["RAILS_ENV"] ||= "test"

require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "minitest/ci"

Minitest::Ci.report_dir = "reports" if ENV["CI"]

class ActiveSupport::TestCase
  # Add more helper methods to be used by all tests here...

  include FactoryBot::Syntax::Methods
  include ActionView::Helpers::TranslationHelper
end

class ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
end

def headers(user, options = {})
  {
    "X-Auth-Token" => user.authentication_token,
    "X-Auth-Email" => user.email
  }.merge(options)
end

def response_body
  response.parsed_body
end
