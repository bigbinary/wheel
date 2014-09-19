require 'test_helper'

class Api::V1::SessionsControllerTest < ActionController::TestCase

  def test_valid_email_and_password_should_be_able_to_log_in
    admin = users :admin
    post :create, user: { email: admin.email, password: 'welcome' }
    assert_response :success
  end

  def test_wrong_combination_of_email_and_password_should_not_be_able_to_log_in
    non_existent_email = 'this_email_does_not_exist_in_db@example.email'
    post :create, user: { email: non_existent_email, password: 'welcome' }
    assert_response 401
    assert_equal 'Incorrect email or password', JSON.parse(response.body)['error']
  end

  def test_should_return_auth_token
    admin = users :admin

    post :create, user: { email: admin.email, password: 'welcome' }

    assert_response :success
    assert JSON.parse(response.body)['auth_token']
  end

end
