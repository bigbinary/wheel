# frozen_string_literal: true

require "test_helper"

class NoteTest < ActiveSupport::TestCase
  def setup
    @user = create(:user)
    @note = build(:note, user: @user)
  end

  def test_note_is_valid
    assert @note.valid?
  end

  def test_title_cannot_be_blank
    @note.title = nil
    @note.save
    assert_not @note.valid?
    assert_equal @note.errors.full_messages, ["Title can't be blank"]
  end

  def test_description_cannot_be_blank
    @note.description = nil
    @note.save
    assert_not @note.valid?
    assert_equal @note.errors.full_messages, ["Description can't be blank"]
  end

  def test_note_should_not_be_valid_without_a_user
    @note.user = nil
    @note.save
    assert_not @note.valid?
    assert_equal @note.errors.full_messages, ["User must exist"]
  end

  def test_title_should_not_be_duplicate
    @note.save
    duplicate_note = @note.dup
    duplicate_note.save
    assert_not duplicate_note.valid?
    assert_equal duplicate_note.errors.full_messages, ["Title has already been taken"]
  end
end
