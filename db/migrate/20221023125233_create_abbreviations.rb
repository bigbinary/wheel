# frozen_string_literal: true

class CreateAbbreviations < ActiveRecord::Migration[7.0]
  def change
    create_table :abbreviations, id: :uuid do |t|
      t.string :name, null: false
      t.string :description
      t.references :psmf_document, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
