class RenameColumnsInNotesTable < ActiveRecord::Migration[6.0]
  def change
    rename_column :notes, :name, :title
    rename_column :notes, :email, :description
  end
end
