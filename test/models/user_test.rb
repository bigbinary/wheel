# frozen_string_literal: true

require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @user = build(:user, :admin)
  end

  def test_admin_is_indeed_super_admin
    assert @user.super_admin?
  end

  def test_email_cannot_be_blank
    @user.email = nil
    assert_not @user.valid?
    assert_includes @user.errors.full_messages, "Email can't be blank"
  end

  def test_first_name_cannot_be_blank
    @user.first_name = nil
    assert_not @user.valid?
    assert_includes @user.errors.full_messages, "First name can't be blank"
  end

  def test_last_name_cannot_be_blank
    @user.last_name = nil
    assert_not @user.valid?
    assert_includes @user.errors.full_messages, "Last name can't be blank"
  end

  def test_user_should_not_be_valid_and_saved_if_email_not_unique
    @user.save!
    test_user = @user.dup
    assert_not test_user.valid?
    assert_includes test_user.errors.full_messages, "Email has already been taken"
  end

  def test_user_should_not_be_saved_without_password
    @user.password = nil
    assert_not @user.valid?
    assert_includes @user.errors.full_messages, "Password can't be blank"
  end

  def test_user_should_not_be_saved_without_password_confirmation
    @user.password_confirmation = nil
    @user.save
    assert_not @user.valid?
    assert_includes @user.errors.full_messages, "Password confirmation can't be blank"
  end

  def test_user_should_have_auth_token
    @user.save!
    assert @user.authentication_token
  end

  def test_user_should_have_matching_password_and_password_confirmation
    @user.password_confirmation = "#{@user.password}-random"
    assert_not @user.valid?
    assert_includes @user.errors.full_messages, "Password confirmation doesn't match Password"
  end

  def test_as_json
    expected = {
      "email" => @user.email,
      "first_name" => @user.first_name,
      "last_name" => @user.last_name,
      "current_sign_in_at" => nil
    }
    assert_equal expected, @user.as_json
  end
end
