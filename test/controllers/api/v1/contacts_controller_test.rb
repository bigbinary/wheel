# frozen_string_literal: true

require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @admin = users(:admin)
    @headers = headers(@admin)
  end
  def test_list_all_contacts_for_a_user
    get api_v1_contacts_url, headers: @headers

    assert_response :success
    contacts = response.parsed_body
    contacts.each do |contact|
      assert_equal %w{ id email name created_at updated_at user_id }.sort, contact.keys.sort
    end
  end

  def test_create_a_valid_contact
    post api_v1_contacts_url, params: { contact: { name: "Zach", email: "zach@example.com" } },
        headers: @headers
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], "Zach has been added to your contacts!"

    contact = response_json["contact"]
    persisted_contact = Contact.find_by(email: "zach@example.com")
    assert_equal contact["name"], persisted_contact.name
    assert_equal contact["email"], persisted_contact.email
    assert_equal contact["id"], persisted_contact.id
  end
end
