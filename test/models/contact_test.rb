require 'test_helper'

class ContactTest < ActiveSupport::TestCase

  def test_valid_contact
    valid_contact = { email: 'bob@exmaple.com',
                      title: 'need help',
                      body: 'some message' }

    contact = Contact.new(valid_contact)

    assert contact.valid?
  end

  def test_invalid_contact
    invalid_contact = { email: 'bob',
                        title: '',
                        body: 'some message' }

    contact = Contact.new(invalid_contact)

    assert_not contact.valid?
    assert_includes contact.errors.full_messages, "Title can't be blank"
    assert_includes contact.errors.full_messages, "Email is invalid"
  end

end
