# frozen_string_literal: true

ActiveAdmin.register User do

  index do
    column :email
    column :current_sign_in_at
    column :last_sign_in_at
    column :sign_in_count
  end

  filter :email

end
