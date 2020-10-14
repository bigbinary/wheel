# frozen_string_literal: true

class Contact < ApplicationRecord
  validates :email, :title, presence: true
  validates :email, email: true
end
