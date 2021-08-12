# frozen_string_literal: true

require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  def test_show_for_a_valid_user
    admin = admin_user

    get api_v1_user_url(admin), params: { format: :json },
                                headers: headers(admin)

    assert_response :success
    json = response.parsed_body
    assert_equal %w{ email first_name last_name current_sign_in_at }.sort, json.keys.sort
  end

  def test_show_when_email_is_not_present
    admin = admin_user
    an_invalid_email = { "X-Auth-Email" => "this_email_is_not_present_in_db@example.com" }

    get api_v1_user_url(admin), params: { format: :json },
                                headers: headers(admin, an_invalid_email)

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials",
      response.parsed_body["error"]
  end

  def test_create_user_with_valid_info
    valid_email = "john@example.com"

    valid_user_json = {
      email: valid_email,
      first_name: "John",
      last_name: "Smith",
      password: "welcome",
      password_confirmation: "welcome",
      phone_number: "1(555)555-5555"
    }

    # Ensure that there are no users with this email in db
    User.where(email: valid_email).delete_all

    assert_difference "User.count", 1 do
      post api_v1_users_url, params: { user: valid_user_json, format: :json }

      assert_response :success
    end
  end

  def test_create_user_should_return_error_for_invalid_data
    valid_email = "john@example.com"

    invalid_user_json = {
      email: valid_email,
      first_name: "John",
      last_name: "Smith",
      password: nil # Invalid password
    }

    # Ensure that there are no users with this email in db
    User.where(email: valid_email).delete_all

    post api_v1_users_url, params: { user: invalid_user_json, format: :json }

    assert_response 422
    assert_equal "Password can't be blank", response.parsed_body["error"]
  end

  def test_update_should_not_succeed_without_authentication
    admin = admin_user
    json_data = admin.as_json

    put api_v1_user_url(admin.email), params: { id: admin.email, user: json_data, format: :json }

    assert_response 401
  end

  def test_update_should_return_error_when_email_is_not_present
    admin = admin_user
    an_invalid_email = { "X-Auth-Email" => "this_email_is_not_present_in_db@example.com" }

    put api_v1_user_url(admin), params: { format: :json },
                                headers: headers(admin, an_invalid_email)

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials",
      response.parsed_body["error"]
  end

  def test_update_user_should_succeed_for_valid_data
    admin = admin_user
    new_first_name = "John2"

    put api_v1_user_url(admin), params: {
      format: :json,
      user: { first_name: new_first_name }
    },
                                headers: headers(admin)

    assert_response :success
    admin.reload
    assert_equal new_first_name, admin.first_name
  end

  def test_update_user_should_return_error_for_invalid_data
    admin = admin_user

    put api_v1_user_url(admin), params: {
      format: :json,
      user: {
        password: "new test password",
        password_confirmation:
                                                    "not matching confirmation"
      }
    },
                                headers: headers(admin)

    assert_response 422
    assert_equal "Password confirmation doesn't match Password",
      response.parsed_body["error"],
      response.parsed_body
  end

  def test_destroy_should_not_be_invokable_without_authentication
    admin = admin_user

    delete api_v1_user_url(admin.email), params: { id: admin.email, format: :json }

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials",
      response.parsed_body["error"]
  end

  def test_destroy_should_destroy_user
    admin = admin_user
    assert_difference "User.count", -1 do
      delete api_v1_user_url(admin), params: { format: :json },
                                     headers: headers(admin)

      assert_response :success
    end
  end

  def test_destroy_should_return_error_if_email_is_not_present_in_database
    admin = admin_user

    email = { "X-Auth-Email" => "this_email_is_not_present_in_db@example.com" }

    delete api_v1_user_url(admin), params: { format: :json }, headers: headers(admin, email)

    assert_response 401
    assert_equal "Could not authenticate with the provided credentials",
      response.parsed_body["error"]
  end

  private

    def admin_user
      create(:user, :admin)
    end
end
