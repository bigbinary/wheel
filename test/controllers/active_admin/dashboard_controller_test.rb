# frozen_string_literal: true

require "test_helper"

class ActiveAdmin::DashboardControllerTest < ActionDispatch::IntegrationTest
  fixtures :all

  def setup
    sign_in users(:admin)
  end

  def test_index_success_for_super_admin
    get active_admin_root_url

    assert_response :success
  end

  def test_index_for_non_super_admin
    sign_in users(:nancy)

    assert_raises ActionController::RoutingError do
      get active_admin_root_url
    end
  end
end
