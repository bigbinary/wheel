class ContactsController < ApplicationController

  def create
    @contact = Contact.new(params[:contact])

    if @contact.valid?
      Mailer.delay.contact_us_notification(@contact)
      flash[:notice] = 'Thank you for your message. We will contact you soon!'
      redirect_to  pages_contact_us_path
    else
      render template: 'pages/contact_us'
    end
  end

end
