# frozen_string_literal: true

require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  def test_index_success
    admin = users(:admin)
    sign_in(admin)

    get pages_url

    assert_response :success
  end

  def test_contact_us_success
    get pages_contact_us_url

    assert_response :success
  end

  def test_about_success
    get pages_about_url

    assert_response :success
  end
end
