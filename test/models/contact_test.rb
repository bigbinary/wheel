# frozen_string_literal: true

require "test_helper"

class ContactTest < ActiveSupport::TestCase
  def test_valid_contact
    valid_contact = { email: "oliver@exmaple.com",
                      name: "Oliver Smith",
                    }

    contact = Contact.new(valid_contact)

    assert contact.valid?
  end

  def test_invalid_contact
    invalid_contact = { email: "bob",
                        name: "" }

    contact = Contact.new(invalid_contact)

    assert_not contact.valid?
    assert_includes contact.errors.full_messages, "Name can't be blank"
    assert_includes contact.errors.full_messages, "Email is invalid"
  end
end
