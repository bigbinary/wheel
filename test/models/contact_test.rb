# frozen_string_literal: true

require "test_helper"

class ContactTest < ActiveSupport::TestCase
  def setup
    @owner = User.find_by(email: "admin@example.com")
  end

  def test_valid_contact
    valid_contact = { email: "oliver@example.com",
                      name: "Oliver Smith",
                      user: @owner
                    }

    contact = Contact.new(valid_contact)
    assert contact.valid?
  end

  def test_invalid_contact
    invalid_contact = { email: "bob",
                        name: "",
                        user: @owner
                      }

    contact = Contact.new(invalid_contact)

    assert_not contact.valid?
    assert_includes contact.errors.full_messages, "Name can't be blank"
    assert_includes contact.errors.full_messages, "Email is invalid"
  end
end
