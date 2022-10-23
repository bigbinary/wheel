# frozen_string_literal: true

class CreatePsmfDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :psmf_documents, id: :uuid do |t|
      t.boolean :default, null: false, default: true
      t.text :introduction, null: false
      t.float :version, null: false

      t.timestamps
    end
  end
end
