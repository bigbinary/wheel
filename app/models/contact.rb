# frozen_string_literal: true

class Contact < ApplicationRecord
  belongs_to :user
  validates :email, :name, presence: true
  validates :email, email: true, uniqueness: true
end
