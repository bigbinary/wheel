# frozen_string_literal: true

require "test_helper"

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @nancy = create(:user, :nancy)
    sign_in @nancy
  end

  def test_updates_user_profile_given_valid_data
    valid_user_data = { first_name: "John2", current_password: "welcome" }
    put user_registration_url(@nancy, format: :html), params: { user: valid_user_data }
    assert_response :ok
    @nancy.reload
    assert_equal @nancy.first_name, valid_user_data[:first_name]
  end

  def test_updates_user_email_given_valid_data
    valid_user_data = { email: "john@example.com", current_password: "welcome" }
    patch email_url(@nancy, format: :html), params: { user: valid_user_data }
    assert_response :ok
    @nancy.reload
    assert_equal @nancy.email, valid_user_data[:email]
  end

  def test_profile_update_failure_if_password_is_incorrect
    invalid_user_data = { first_name: "John2", current_password: "incorrect_password" }
    put user_registration_url(@nancy, format: :html), params: { user: invalid_user_data }
    assert_response :unprocessable_entity
    @nancy.reload
    assert_equal response_body["error"], "Couldn't update the user profile! Please try again."
    assert_not_equal @nancy.first_name, invalid_user_data[:first_name]
  end

  def test_email_update_failure_if_password_is_incorrect
    invalid_user_data = { email: "john@example.com", current_password: "incorrect_password" }
    patch email_url(@nancy, format: :html), params: { user: invalid_user_data }
    assert_response :unprocessable_entity
    @nancy.reload
    assert_equal response_body["error"], "Couldn't update the Email! Please try again."
    assert_not_equal @nancy.email, invalid_user_data[:email]
  end
end
