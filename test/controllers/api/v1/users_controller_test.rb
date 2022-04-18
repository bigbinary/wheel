# frozen_string_literal: true

require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @admin = create(:user, :admin)
  end

  def test_show_for_a_valid_user
    get api_v1_user_url(@admin), params: { format: :json },
      headers: headers(@admin)

    assert_response :success
    json = response_body
    assert_equal %w{ email first_name last_name current_sign_in_at }.sort, json.keys.sort
  end

  def test_show_when_email_is_not_present
    an_invalid_email = { "X-Auth-Email" => "this_email_is_not_present_in_db@example.com" }

    get api_v1_user_url(@admin), params: { format: :json },
      headers: headers(@admin, an_invalid_email)

    assert_response :unauthorized
    assert_equal response_body["error"], t("invalid_credentials")
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
      password: nil,
      password_confirmation: nil
    }

    # Ensure that there are no users with this email in db
    User.where(email: valid_email).delete_all

    post api_v1_users_url, params: { user: invalid_user_json, format: :json }

    assert_response :unprocessable_entity
    assert_equal "Password can't be blank and Password confirmation can't be blank", response_body["error"]
  end

  def test_destroy_should_not_be_invokable_without_authentication
    delete api_v1_user_url(@admin.email), params: { id: @admin.email, format: :json }

    assert_response :unauthorized
    assert_equal response_body["error"], t("invalid_credentials")
  end

  def test_destroy_should_destroy_user
    assert_difference "User.count", -1 do
      delete api_v1_user_url(@admin), params: { format: :json },
        headers: headers(@admin)

      assert_response :success
    end
  end

  def test_destroy_should_return_error_if_email_is_not_present_in_database
    email = { "X-Auth-Email" => "this_email_is_not_present_in_db@example.com" }

    delete api_v1_user_url(@admin), params: { format: :json }, headers: headers(@admin, email)

    assert_response :unauthorized
    assert_equal response_body["error"], t("invalid_credentials")
  end
end
