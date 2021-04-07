# frozen_string_literal: true

require "test_helper"

class Api::V1::NotesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @admin = create(:user, :admin)
    @headers = headers(@admin)
  end
  def test_list_all_notes_for_a_user
    get api_v1_notes_url, headers: @headers

    assert_response :success
    notes = response.parsed_body
    notes.each do |note|
      assert_equal %w{ id description title created_at updated_at user_id }.sort, note.keys.sort
    end
  end

  def test_create_a_valid_note
    post api_v1_notes_url, params: { note: { title: "Zach", description: "zach@example.com" } },
        headers: @headers
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], "Zach has been added to your notes!"

    note = response_json["note"]
    persisted_note = Note.find_by(description: "zach@example.com")
    assert_equal note["title"], persisted_note.title
    assert_equal note["description"], persisted_note.description
    assert_equal note["id"], persisted_note.id
  end

  def test_create_note_with_blank_title
    post api_v1_notes_url, params: { note: { title: "", description: "zach@example.com" } },
        headers: @headers
    assert_response :unprocessable_entity

    response_json = response.parsed_body
    assert_equal response_json["error"], "Title can't be blank"
  end

  def test_create_note_with_blank_description
    post api_v1_notes_url, params: { note: { title: "Zach", description: "" } },
        headers: @headers
    assert_response :unprocessable_entity

    response_json = response.parsed_body
    assert_equal response_json["error"], "Description can't be blank"
  end

  def test_delete_single_note
    milk = create(:note, :milk, user: @admin)
    bulbs = create(:note, :bulbs, user: @admin)
    initial_notes_count = @admin.notes.size

    post bulk_delete_api_v1_notes_path, params: { ids: [milk.id] },
        headers: @headers
    assert_response :success
    assert_equal @admin.notes.size, initial_notes_count-1
  end

  def test_delete_multiple_note
    milk = create(:note, :milk, user: @admin)
    bulbs = create(:note, :bulbs, user: @admin)
    rent = create(:note, :rent, user: @admin)
    initial_notes_count = @admin.notes.size

    post bulk_delete_api_v1_notes_path, params: { ids: [milk.id, bulbs.id, rent.id] },
        headers: @headers
    assert_response :success
    assert_equal @admin.notes.size, initial_notes_count-3
  end

  def test_delete_invalid_id
    initial_notes_count = @admin.notes.size
    post bulk_delete_api_v1_notes_path, params: { ids: ["random_id"] },
        headers: @headers
    response_json = response.parsed_body

    assert_response :unprocessable_entity
    assert_equal response_json["error"], "No users found with those IDs"
    assert_equal @admin.notes.size, initial_notes_count
  end
end
