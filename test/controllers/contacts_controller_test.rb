require 'test_helper'

class ContactsControllerTest < ActionController::TestCase

  def setup
    request.env["HTTP_REFERER"] = "http://test.com"
  end

  def test_create_success
    contact_param = { contact: { title: 'contact title',
                                 body: 'some message',
                                 email: 'bob@example.com' } }
    post :create, contact_param

    assert_includes ActionMailer::Base.deliveries.last.from, contact_param[:contact][:email]
    assert_redirected_to pages_contact_us_path
    assert_equal 'Thank you for your message. We will contact you soon!', flash[:notice]
  end

  def test_create_failure
    post :create, contact: { title: 'contact title',
                             body: 'some message',
                             email: 'bob' }

    contact = assigns :contact
    assert_includes contact.errors.full_messages, 'Email is invalid'
  end

  def test_create_failure_should_render_contact_us_template
    post :create, contact: { title: 'contact title',
                             body: 'some message',
                             email: 'bob' }

    assert_template "pages/contact_us"
    assert_not_nil assigns(:contact)
  end

end
