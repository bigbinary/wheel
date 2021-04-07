# frozen_string_literal: true

require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = build(:user, :admin)
  end

  def test_admin_is_indeed_super_admin
    assert @user.super_admin?
  end

  def test_first_name_is_blank
    @user.first_name = nil
    assert_equal "Smith", @user.name
  end

  def test_last_name_is_blank
    @user.last_name = nil
    assert_equal "Adam", @user.name
  end

  def test_as_json
    expected = { "email" => "admin@example.com", "current_sign_in_at" => nil, "last_name" => "Smith", "first_name" => "Adam" }
    assert_equal expected, @user.as_json
  end
end
