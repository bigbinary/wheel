class RenameContactsToNotes < ActiveRecord::Migration[6.0]
  def change
    rename_table :contacts, :notes
  end
end
