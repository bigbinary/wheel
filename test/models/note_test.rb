# frozen_string_literal: true

require "test_helper"

class NoteTest < ActiveSupport::TestCase
  def setup
    @admin = build(:user, :admin)
  end

  def test_valid_note
    valid_note = { description: "oliver@example.com",
                      title: "Oliver Smith",
                      user: @admin
                    }

    note = Note.new(valid_note)
    assert note.valid?
  end

  def test_invalid_note
    invalid_note = { description: "",
                        title: "",
                        user: @admin
                      }

    note = Note.new(invalid_note)

    assert_not note.valid?
    assert_includes note.errors.full_messages, "Title can't be blank"
    assert_includes note.errors.full_messages, "Description can't be blank"
  end
end
