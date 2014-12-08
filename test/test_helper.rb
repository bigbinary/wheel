def enable_test_coverage
  require 'simplecov'

  SimpleCov.start do
    add_filter '/test/'

    add_group 'Models',       'app/models'
    add_group 'Mailers',      'app/mailers'
    add_group 'Controllers',  'app/controllers'
    add_group 'Uploaders',    'app/uploaders'
    add_group 'Helpers',      'app/helpers'
    add_group 'Workers',      'app/workers'
    add_group 'Services',     'app/services'
  end
end

enable_test_coverage if ENV['COVERAGE']

ENV["RAILS_ENV"] ||= "test"

require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/reporters'
require 'minitest/pride'


MiniTest::Reporters.use!

class ActiveSupport::TestCase

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  fixtures :all

  # Add more helper methods to be used by all tests here...
end

class ActionController::TestCase
  include Devise::TestHelpers
end
