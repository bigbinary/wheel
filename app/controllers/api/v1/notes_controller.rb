# frozen_string_literal: true

class Api::V1::NotesController < Api::V1::BaseController
  before_action :load_note!, only: %i[update delete]
  before_action :load_notes, only: :bulk_delete

  def index
    respond_with_json({ notes: current_user.notes })
  end

  def create
    note = current_user.notes.new(note_params)
    note.save!
    respond_with_success(t("successfully_created", entity: "Note"))
  end

  def update
    @note.update!(note_params)
    respond_with_success(t("successfully_updated", entity: "Note"))
  end

  def bulk_delete
    records_size = @notes.size
    if @notes.destroy_all
      respond_with_success(t("successfully_deleted", count: records_size, entity: records_size > 1 ? "Notes" : "Note"))
    else
      respond_with_error(t("Something went wrong!"))
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
      respond_with_error(t("not_found", entity: "Note")) if @notes.empty?
    end
end
