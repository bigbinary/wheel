# frozen_string_literal: true

class Api::V1::NotesController < Api::V1::BaseController
  before_action :load_note!, only: [:update, :delete]
  before_action :load_notes!, only: :bulk_delete

  def index
    render json: { notes: current_user.notes }
  end

  def create
    if (note = current_user.notes.new(note_params)) && note.save
      render json: {
        note: note,
        notice: "#{note.title.humanize} has been added to your notes!"
      }
    else
      render json: {
        error: note.errors.full_messages.to_sentence
      }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: {
        notice: "#{@note.title.humanize} note has been updated"
      }
    else
      render json: {
        error: note.errors.full_messages.to_sentence
      }, status: :unprocessable_entity
    end
  end

  def bulk_delete
    if @notes.destroy_all
      render json: {
        notice: I18n.t("notice.note", count: @notes.size, action: "deleted")
      }
    else
      render json: { error: "Something went wrong!" }, status: :unprocessable_entity
    end
  end

  private

    def note_params
      params.require(:note).permit(:title, :description)
    end

    def load_note!
      @note = current_user.notes.find(params[:id])
    end

    def load_notes!
      @notes = current_user.notes.where(id: params[:ids])
    end
end
