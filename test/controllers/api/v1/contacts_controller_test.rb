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

  def test_create_contact_with_invalid_email
    post api_v1_contacts_url, params: { contact: { name: "Zach", email: "zach.com" } },
        headers: @headers
    assert_response :unprocessable_entity

    response_json = response.parsed_body
    assert_equal response_json["error"], "Email is invalid"
  end

  def test_create_contact_with_blank_name
    post api_v1_contacts_url, params: { contact: { name: "", email: "zach@example.com" } },
        headers: @headers
    assert_response :unprocessable_entity

    response_json = response.parsed_body
    assert_equal response_json["error"], "Name can't be blank"
  end

  def test_create_contact_with_blank_email
    post api_v1_contacts_url, params: { contact: { name: "Zach", email: "" } },
        headers: @headers
    assert_response :unprocessable_entity

    response_json = response.parsed_body
    assert_equal response_json["error"], "Email can't be blank and Email is invalid"
  end

  def test_delete_single_contact
    initial_contacts_count = @admin.contacts.size
    peter = contacts(:peter)

    post bulk_delete_api_v1_contacts_path, params: { ids: [peter.id] },
        headers: @headers
    assert_response :success
    assert_equal @admin.contacts.size, initial_contacts_count-1
  end

  def test_delete_multiple_contact
    initial_contacts_count = @admin.contacts.size
    peter = contacts(:peter)
    meg = contacts(:meg)
    stewie = contacts(:stewie)

    post bulk_delete_api_v1_contacts_path, params: { ids: [peter.id, meg.id, stewie.id] },
        headers: @headers
    assert_response :success
    assert_equal @admin.contacts.size, initial_contacts_count-3
  end

  def test_delete_invalid_id
    initial_contacts_count = @admin.contacts.size
    post bulk_delete_api_v1_contacts_path, params: { ids: ["random_id"] },
        headers: @headers
    response_json = response.parsed_body

    assert_response :unprocessable_entity
    assert_equal response_json["error"], "No users found with those IDs"
    assert_equal @admin.contacts.size, initial_contacts_count
  end
end
