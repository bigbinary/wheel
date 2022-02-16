# frozen_string_literal: true

require "test_helper"

class ActiveAdmin::DashboardControllerTest < ActionDispatch::IntegrationTest
  def test_index_for_non_super_admin
    user = create(:user)
    sign_in user
    get active_admin_root_url
    assert_redirected_to root_path
  end
end
