# frozen_string_literal: true

class Api::V1::NotesController < Api::V1::BaseController
  before_action :load_note!, only: %i[update delete]
  before_action :load_notes, only: :bulk_delete

  def index
    render_json({ notes: current_user.notes })
  end

  def create
    current_user.notes.create!(note_params)
    render_message(t("successfully_created", entity: "Note"))
  end

  def update
    @note.update!(note_params)
    render_message(t("successfully_updated", entity: "Note"))
  end

  def bulk_delete
    records_size = @notes.size
    if @notes.destroy_all
      render_message(t("successfully_deleted", count: records_size, entity: records_size > 1 ? "Notes" : "Note"))
    else
      render_error(t("Something went wrong!"))
    end
  end

  private

    def note_params
      params.require(:note).permit(:title, :description)
    end

    def load_note!
      @note = current_user.notes.find(params[:id])
    end

    def load_notes
      @notes = current_user.notes.where(id: params[:ids])
      render_error(t("not_found", entity: "Note")) if @notes.empty?
    end
end
