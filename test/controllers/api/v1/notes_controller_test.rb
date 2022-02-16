# frozen_string_literal: true

require "test_helper"

class Api::V1::NotesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @admin = create :user, :admin
    sign_in @admin
    @notes = create_list(:note, 3, user: @admin)
    @headers = headers(@admin)
  end

  def test_list_all_notes_for_a_user
    get api_v1_notes_url, headers: @headers

    assert_response :success
    note = response_body["notes"].first
    assert_equal %w{ id description title created_at updated_at user_id }.sort, note.keys.sort
  end

  def test_create_a_valid_note
    payload = {
      note: {
        title: "Call Zach!",
        description: "Call to inform about the meeting."
      }
    }

    assert_difference "@admin.notes.count" do
      post api_v1_notes_url, params: payload, headers: @headers
    end

    assert_response :success
    assert_equal response_body["notice"], t("successfully_created", entity: "Note")
  end

  def test_returb_error_on_creating_note_with_blank_title
    post api_v1_notes_url, params: { note: { title: "", description: "zach@example.com" } },
      headers: @headers
    assert_response :unprocessable_entity

    assert_equal response_body["error"], "Title can't be blank"
  end

  def test_returb_error_on_creating_note_with_blank_description
    post api_v1_notes_url, params: { note: { title: "Zach", description: "" } },
      headers: @headers
    assert_response :unprocessable_entity

    assert_equal response_body["error"], "Description can't be blank"
  end

  def test_delete_single_note
    assert_difference "@admin.notes.count", -1 do
      post bulk_delete_api_v1_notes_path, params: { ids: [@notes.first.id] }, headers: @headers
    end

    assert_response :success
    assert_equal response_body["notice"], t("successfully_deleted", count: 1, entity: "Note")
  end

  def test_delete_multiple_note
    assert_difference "@admin.notes.count", -3 do
      post bulk_delete_api_v1_notes_path, params: { ids: @notes.pluck(:id) }, headers: @headers
    end
    assert_response :success
    assert_equal response_body["notice"], t("successfully_deleted", count: 3, entity: "Notes")
  end

  def test_delete_invalid_id
    assert_no_difference "@admin.notes.count" do
      post bulk_delete_api_v1_notes_path, params: { ids: ["random_id"] }, headers: @headers
    end

    assert_response :unprocessable_entity
    assert_equal response_body["error"], t("not_found", entity: "Note")
  end
end
