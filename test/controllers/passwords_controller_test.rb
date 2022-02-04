# frozen_string_literal: true

require "test_helper"

class PasswordsControllerTest < ActionDispatch::IntegrationTest
  def setup
    @nancy = create(:user, :nancy)
    sign_in @nancy
  end

  def test_password_update_success
    valid_params = { current_password: "welcome", password: "new_password", password_confirmation: "new_password" }
    patch password_url(@nancy), params: { user: valid_params }
    assert_response :ok
    assert_equal response_body["notice"], t("successfully_updated", entity: "Password")
  end

  def test_password_update_failure_for_incorrect_password
    invalid_params = {
      current_password: "incorrect_password", password: "new_password",
      password_confirmation: "new_password"
    }
    patch password_url(@nancy), params: { user: invalid_params }
    assert_response :unprocessable_entity
    assert_equal response_body["error"], "Current password is invalid"
  end

  def test_password_update_failure_when_password_does_not_match_password_confirmation
    invalid_params = {
      current_password: "welcome", password: "new_password",
      password_confirmation: "invalid_password"
    }
    patch password_url(@nancy), params: { user: invalid_params }
    assert_response :unprocessable_entity
    assert_equal response_body["error"], "Password confirmation doesn't match Password"
  end
end
