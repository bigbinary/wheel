class RemoveProfileImageFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_image
  end
end
