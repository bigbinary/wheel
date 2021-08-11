# frozen_string_literal: true

require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  def test_contact_success
    get "/contact"

    assert_response :success
  end

  def test_features_success
    get "/features"

    assert_response :success
  end
end
