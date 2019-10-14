class ChangeIdsToUuids < ActiveRecord::Migration[6.0]
  def up
    tables = [
      "users",
      "active_admin_comments"
    ]

    tables.each do |table|
      remove_column table, :id
      rename_column table, :uuid, :id
      execute "ALTER TABLE #{table} ADD PRIMARY KEY (id);"
    end
  end
end
