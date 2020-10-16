# frozen_string_literal: true

class Api::V1::ContactsController < Api::V1::BaseController
  before_action :load_contact, only: [:show, :delete]

  def index
    contacts = current_user.contacts
    render json: { contacts: contacts }
  end

  def create
    @contact = Contact.new(contact_params.merge(user: current_user))
    if @contact.save
      render json: { notice: "#{@contact.name.humanize} has been added to your contacts!" }
    else
      render json: { error: @contact.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

    def contact_params
      params.require(:contact).permit([ :name, :email]).to_h
    end

    def load_contact
      @contact = Contact.find(params[:id])
    end
end
