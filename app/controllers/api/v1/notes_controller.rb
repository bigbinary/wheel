# frozen_string_literal: true

class Api::V1::NotesController < Api::V1::BaseController
  before_action :load_note!, only: %i[update delete]
  before_action :load_notes, only: :bulk_delete

  def index
    print_remote_ip
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
    def print_remote_ip
      puts "====================REMOTE IP=================="
      puts "request.ip: #{request.ip}"
      puts "request.remote_ip: #{request.remote_ip}"
      puts "request.headers['X-Forwarded-For']: #{request.headers['X-Forwarded-For']}"
      puts "request.headers['True-Client-IP']: #{request.headers['True-Client-IP']}"
      puts "request.headers['CF-Connecting-IP']: #{request.headers['CF-Connecting-IP']}"
    end

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
