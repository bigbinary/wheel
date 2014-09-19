class PagesController < ApplicationController

  def index
    render
  end

  def contact_us
    @contact = Contact.new
  end

  def about
    render
  end

end
