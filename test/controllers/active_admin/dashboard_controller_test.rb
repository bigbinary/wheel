# frozen_string_literal: true

require "test_helper"

class ActiveAdmin::DashboardControllerTest < ActionDispatch::IntegrationTest
  def setup
    user = create(:user, :admin)
    sign_in user
  end

  def test_index_for_non_super_admin
    nancy = create(:user, :nancy)
    sign_in nancy
    get active_admin_root_url

    assert_redirected_to root_path
  end
end
