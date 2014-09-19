require 'test_helper'

class Api::V1::UsersControllerTest < ActionController::TestCase

  def test_show_for_a_valid_user
    admin = users(:admin)
    set_auth_headers!(admin)

    get :show, { id: admin.email, format: :json }

    assert_response :success
    json = JSON.parse(response.body)
    assert_equal %w{ email first_name last_name current_sign_in_at }.sort, json.keys.sort
  end

  def test_show_when_email_is_not_present
    admin = users :admin
    an_invalid_email = 'this_email_is_not_present_in_db@example.com'
    set_auth_headers!(admin)

    get :show, { id: an_invalid_email, format: :json }

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials", JSON.parse(response.body)['error']
  end

  def test_create_user_with_valid_info
    valid_email = 'john@example.com'

    valid_user_json = { email: valid_email,
                        first_name: 'John',
                        last_name: 'Smith',
                        password: 'welcome',
                        password_confirmation: 'welcome',
                        phone_number: '1(555)555-5555' }

    # Ensure that there are no users with this email in db
    User.delete_all(email: valid_email)

    assert_difference 'User.count', 1 do
      post :create, user: valid_user_json
      assert_response :success
    end
  end

  def test_create_user_should_return_error_for_invalid_data
    valid_email = 'john@example.com'

    invalid_user_json = { email: valid_email,
                          first_name: 'John',
                          last_name: 'Smith',
                          password: nil # Invalid password
                        }

    # Ensure that there are no users with this email in db
    User.delete_all( email: valid_email )

    post :create, user: invalid_user_json
    assert_response 422
    assert_equal "Password can't be blank", JSON.parse(response.body)['error']
  end

  def test_update_should_not_succeed_without_authentication
    admin = users :admin
    json_data = admin.as_json
    put :update, { id: admin.email, user: json_data }
    assert_response 401
  end

  def test_update_should_return_error_when_email_is_not_present
    admin = users(:admin)
    an_invalid_email = 'this_email_is_not_present_in_db@example.com'
    set_auth_headers!(admin)

    put :update, { id: an_invalid_email, format: :json }

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials", JSON.parse(response.body)['error']
  end

  def test_update_user_should_succeed_for_valid_data
    admin = users(:admin)
    new_first_name = 'John2'
    set_auth_headers!(admin)

    put :update, { id: admin.email, user: { first_name: new_first_name }, format: :json }

    assert_response :success
    admin.reload
    assert_equal new_first_name, admin.first_name
  end

  def test_update_user_should_return_error_for_invalid_data
    admin = users(:admin)

    set_auth_headers!(admin)

    put :update, { id: admin.email, format: :json, user: { password: 'new test password', password_confirmation: 'not matching confirmation' } }
    assert_response 422

    assert_equal "Password confirmation doesn't match Password", JSON.parse(response.body)['error'], response.body
  end

  def test_destroy_should_not_be_invokable_without_authentication
    admin = users :admin
    delete :destroy, id: admin.email
    assert_response 401

    assert_equal 'Could not authenticate with the provided credentials', JSON.parse(response.body)['error']
  end

  def test_destroy_should_destroy_user
    admin = users :admin
    set_auth_headers!(admin)

    assert_difference 'User.count', -1 do
      delete :destroy, { id: admin.email, format: :json }
      assert_response :success
    end
  end

  def test_destroy_should_return_error_if_email_is_not_present_in_database
    admin = users :admin
    email = 'this_email_is_not_present_in_db@example.com'

    set_auth_headers!(admin)

    delete :destroy, { id: email, format: :json }

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials", JSON.parse(response.body)['error']
  end

  def set_auth_headers!(user)
    request.headers['X-Auth-Token'] = user.authentication_token
  end

end
