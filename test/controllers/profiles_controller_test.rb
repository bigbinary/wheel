# frozen_string_literal: true

require "test_helper"

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = create(:user)
    sign_in @user
  end

  def test_updates_user_profile_given_valid_data
    valid_user_data = { first_name: "John2", current_password: "welcome" }
    put user_registration_url(@user), params: { user: valid_user_data }
    assert_response :ok
    @user.reload
    assert_equal @user.first_name, valid_user_data[:first_name]
    assert_equal response_body["notice"], t("successfully_updated", entity: "User profile")
  end

  def test_updates_user_email_given_valid_data
    valid_user_data = { email: "john@example.com", current_password: "welcome" }
    patch email_url(@user), params: { user: valid_user_data }
    assert_response :ok
    @user.reload
    assert_equal @user.email, valid_user_data[:email]
    assert_equal response_body["notice"], t("successfully_updated", entity: "Email")
  end

  def test_profile_update_failure_if_password_is_incorrect
    invalid_user_data = { first_name: "John2", current_password: "incorrect_password" }
    put user_registration_url(@user), params: { user: invalid_user_data }
    assert_response :unprocessable_entity
    @user.reload
    assert_not_equal @user.first_name, invalid_user_data[:first_name]
    assert_equal response_body["error"], "Current password is invalid"
  end

  def test_email_update_failure_if_password_is_incorrect
    invalid_user_data = { email: "john@example.com", current_password: "incorrect_password" }
    patch email_url(@user), params: { user: invalid_user_data }
    assert_response :unprocessable_entity
    @user.reload
    assert_not_equal @user.email, invalid_user_data[:email]
    assert_equal response_body["error"], "Current password is invalid"
  end
end
