# frozen_string_literal: true

require "test_helper"

class ApiInvalidJsonDataTest < ActionDispatch::IntegrationTest
  def test_invalid_payload_responds_with_message
    invalid_json = %Q{ { "foo":'bar' } }

    post "/api/v1/users", params: { foo: "bar" }, as: :json

    assert_response 500
    assert response.body.include?("Something went wrong. Please try again later."), response.body
  end
end
