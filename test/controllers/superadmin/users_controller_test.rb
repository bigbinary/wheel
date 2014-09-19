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

end
