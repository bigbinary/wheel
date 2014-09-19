require 'test_helper'

class ApiInvalidJsonDataTest < ActionDispatch::IntegrationTest

  def test_invalid_payload_responds_with_message
    invalid_json = %Q{ { "foo":'bar' } }

    post "/v1/users", invalid_json , "CONTENT_TYPE" => 'application/json'

    assert_response 400
    assert response.body.include?("Payload data is not valid JSON"), response.body
  end

end
