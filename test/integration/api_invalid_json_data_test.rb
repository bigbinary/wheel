# frozen_string_literal: true

require "test_helper"

class ApiInvalidJsonDataTest < ActionDispatch::IntegrationTest
  def test_invalid_payload_responds_with_message
    invalid_json = %Q{ { "foo":'bar' } }

    post "/api/v1/users", params: invalid_json, as: :json

    assert_response :internal_server_error
    assert_equal response_body["error"], "param is missing or the value is empty: user"
  end
end
