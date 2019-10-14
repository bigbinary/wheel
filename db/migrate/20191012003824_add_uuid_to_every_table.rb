class AddUuidToEveryTable < ActiveRecord::Migration[6.0]
  def up
    tables = [
      "users",
      "active_admin_comments"
    ]

    tables.each do |table|
      add_column table, :uuid, :uuid, default: "gen_random_uuid()", null: false
    end 
  end
end
