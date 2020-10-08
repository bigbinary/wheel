class RemoveProfileImageFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :profile_image
  end
end
