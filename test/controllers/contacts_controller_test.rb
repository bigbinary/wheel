require 'test_helper'

class ContactsControllerTest < ActionController::TestCase

  def before_setup
    super
    ActionMailer::Base.deliveries.clear
  end

  def setup
    request.env["HTTP_REFERER"] = "http://test.com"
  end

  def test_create_success
    contact_param = { contact: { title: 'contact title',
                                 body: 'some message',
                                 email: 'bob@example.com' } }
    post :create, params: contact_param

    assert_includes ActionMailer::Base.deliveries.last.from, contact_param[:contact][:email]
    assert_redirected_to pages_contact_us_path
    assert_equal 'Thank you for your message. We will contact you soon!', flash[:notice]
  end

  def test_create_failure
    invalid_contact_param = { contact: { title: 'contact title',
                                         body: 'some message',
                                         email: 'bob' }}
    post :create, params: invalid_contact_param

    assert_select 'form#new_contact'
    assert_nil ActionMailer::Base.deliveries.last
    assert_nil flash[:notice]
  end

end
