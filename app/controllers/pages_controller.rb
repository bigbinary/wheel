# frozen_string_literal: true

class PagesController < ApplicationController
  def index
    render
  end

  def contact
    @contact = Contact.new
  end

  def features
    render
  end
end
