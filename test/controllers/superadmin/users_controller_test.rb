# frozen_string_literal: true

require "test_helper"

class Superadmin::UsersControllerTest < ActionDispatch::IntegrationTest
  def test_index_when_user_is_superadmin
    user = users :admin
    sign_in user

    get superadmin_users_url
    assert_response :success
  end

  def test_index_when_user_is_not_superadmin
    user = users :nancy
    sign_in user

    assert_raises ActionController::RoutingError do
      get superadmin_users_url
    end
  end
end
