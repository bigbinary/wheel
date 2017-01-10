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

  def test_edit_user_modal_success_response
    user = users :admin
    sign_in user

    get edit_superadmin_user_url(users(:nancy))
    assert_response :success
  end

  def test_user_update_success
    admin = users :admin
    sign_in admin
    nancy = users :nancy

    put superadmin_user_url(nancy), params: { user: { first_name: "Jane" } }
    nancy.reload

    assert "Jane", nancy.first_name
  end
end
