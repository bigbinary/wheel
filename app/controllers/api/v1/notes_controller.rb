# frozen_string_literal: true

class Api::V1::NotesController < Api::V1::BaseController
  before_action :load_note, only: [:show, :delete]

  def index
    notes = current_user.notes
    render json: notes
  end

  def create
    @note = Note.new(note_params.merge(user: current_user))
    if @note.save
      render json: { note: @note, notice: "#{@note.title.humanize} has been added to your notes!" }
    else
      render json: { error: @note.errors.full_messages.to_sentence }, status: 422
    end
  end

  def bulk_delete
    notes = Note.where(id: params[:ids], user: current_user)
    if notes.empty?
      render json: { error: "No users found with those IDs" }, status: 422
    else
      notes_count = notes.size
      notes.destroy_all
      render json: { notice: "#{notes_count} notes has been added deleted." }
    end
  end

  private

    def note_params
      params.require(:note).permit([ :title, :description]).to_h
    end

    def load_note
      @note = Note.find(params[:id])
    end
end
