# frozen_string_literal: true

require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  def test_index_renders_message
    admin = create(:user, :admin)
    sign_in admin

    get "/"

    assert_response :success
  end
end
