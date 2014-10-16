require 'test_helper'

class ActiveAdmin::DashboardControllerTest < ActionController::TestCase
  fixtures :all

  def setup
    sign_in users(:admin)
  end

  def test_index_success_for_super_admin
    get :index
    assert_response :success
  end

  def test_index_redirects_for_non_super_admin
    sign_in users(:nancy)
    get :index
    assert_response :forbidden
  end

end
