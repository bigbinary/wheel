# frozen_string_literal: true

class Api::V1::ContactsController < Api::V1::BaseController
  before_action :load_contact, only: [:show, :delete]

  def index
    contacts = current_user.contacts
    render json: contacts
  end

  def create
    @contact = Contact.new(contact_params.merge(user: current_user))
    if @contact.save
      render json: { contact: @contact, notice: "#{@contact.name.humanize} has been added to your contacts!" }
    else
      render json: { error: @contact.errors.full_messages.to_sentence }, status: 422
    end
  end

  def bulk_delete
    contacts = Contact.where(id: params[:ids], user: current_user)
    contacts_count = contacts.size
    contacts.destroy_all
    render json: { notice: "#{contacts_count} contacts has been added deleted." }
  end

  private

    def contact_params
      params.require(:contact).permit([ :name, :email]).to_h
    end

    def load_contact
      @contact = Contact.find(params[:id])
    end
end
