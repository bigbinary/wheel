# frozen_string_literal: true

class Contact < ApplicationRecord
  belongs_to :user
  validates :email, :title, presence: true
  validates :email, email: true
end
