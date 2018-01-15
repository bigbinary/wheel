# frozen_string_literal: true

class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)

    if @contact.valid?
      Mailer.delay.contact_us_notification(@contact)
      flash[:notice] = "Thank you for your message. We will contact you soon!"
      redirect_to pages_contact_us_path
    else
      render template: "pages/contact_us"
    end
  end

  private

    def contact_params
      params.require(:contact).permit([ :email, :title, :body]).to_h
    end
end
