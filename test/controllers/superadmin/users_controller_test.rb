require 'test_helper'

class Superadmin::UsersControllerTest < ActionController::TestCase

  def test_index_when_user_is_superadmin
    user = users :admin
    sign_in user
    get :index
    assert_response :success
  end

  def test_index_when_user_is_not_superadmin
    user = users :nancy
    sign_in user
    get :index
    assert_response :forbidden
  end

  def test_edit_user_modal_success_response
    user = users :admin
    sign_in user
    get :edit, id: users(:nancy)
    assert_response :success
  end

  def test_user_update_success
    admin = users :admin
    sign_in admin
    nancy = users :nancy

    post :update, id: nancy, user: {first_name: 'Jane'}
    nancy.reload

    assert 'Jane', nancy.first_name
  end
end
