# frozen_string_literal: true

class Api::V1::AbbreviationsController < Api::V1::BaseController
  before_action :load_psmf_document!
  before_action :load_abbreviation!, only: %i[update destroy]

  def index
    respond_with_json({ abbreviations: @psmf_document.abbreviations })
  end

  def create
    abbreviation = @psmf_document.abbreviations.new(abbreviation_params)
    abbreviation.save!
    respond_with_success(t("successfully_created", entity: "Abbreviation"))
  end

  def update
    @abbreviation.update!(abbreviation_params)
    respond_with_success(t("successfully_updated", entity: "Abbreviation"))
  end

  def destroy
    @abbreviation.destroy!
    respond_with_success(t("successfully_deleted", entity: "Abbreviation"))
  end

  def bulk_delete
    @abbreviations = @psmf_document.abbreviations.where(id: params[:ids])
    records_size = @abbreviations.size
    if @abbreviations.destroy_all
      respond_with_success(
        t(
          "successfully_deleted", count: records_size,
          entity: records_size > 1 ? "Abbreviations" : "Abbreviation"))
    else
      respond_with_error(t("Something went wrong!"))
    end
  end

  private

    def abbreviation_params
      params.require(:abbreviation).permit(:name, :description)
    end

    def load_abbreviation!
      @abbreviation = @psmf_document.abbreviations.find(params[:id])
    end

    def load_psmf_document!
      @psmf_document = PsmfDocument.first
    end
end
