require 'test_helper'

class RegistrationsControllerTest < ActionController::TestCase

  setup do
    request.env['devise.mapping'] = Devise.mappings[:user]
  end

  def test_successfull_user_registration
    assert_difference('User.count') do
      post :create, { user: { email: "nancy@test.example.com",
                              first_name: "Nancy",
                              last_name: "Smith",
                              password: "welcome",
                              phone_number: '1(555)555-5555',
                              password_confirmation: "welcome" } }
    end
    assert_redirected_to root_path
  end

  def test_required_parameters
    assert_no_difference('User.count') do
      post :create, {user: {email: "steve@example.com", password: "welcome", password_confirmation: "welcome"}}
    end

    assert_response :success
  end

  def test_updates_password_given_valid_data
    nancy = users :nancy
    sign_in nancy

    get :edit_password
    assert_response :success

    valid_user_data = { password: 'new password', password_confirmation: 'new password', current_password: 'welcome' }
    put :update_password, user: valid_user_data
    assert_redirected_to root_path
  end

  def test_does_not_update_password_given_invalid_data
    nancy = users :nancy
    sign_in nancy

    get :edit_password
    assert_response :success

    invalid_user_data = { password: 'new password', password_confirmation: 'new not matching password', current_password: 'welcome' }

    put :update_password, user: invalid_user_data
    assert_response :success
    assert assigns(:user)
    @user = assigns(:user)
    assert @user.errors.count > 0
  end

  def test_updates_user_profile_given_valid_data
    nancy = users :nancy
    sign_in nancy

    get :edit
    assert_response :success

    valid_user_data = { first_name: 'John2', current_password: 'welcome' }
    put :update, user: valid_user_data
    assert_redirected_to root_path
    nancy.reload
    assert_equal nancy.first_name, valid_user_data[:first_name]
  end

end
