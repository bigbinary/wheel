# frozen_string_literal: true

class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes, id: :uuid do |t|
      t.string :title
      t.string :description
      t.references :user, type: :uuid

      t.timestamps
    end
  end
end
