# frozen_string_literal: true

class AddProfileImageToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :profile_image, :string
  end
end
