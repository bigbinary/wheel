require 'test_helper'

class PagesControllerTest < ActionController::TestCase

  def test_index_success
    get :index

    assert_response :success
  end

  def test_contact_us_success
    get :contact_us

    assert_response :success
  end

  def test_about_success
    get :about

    assert_response :success
  end

end
