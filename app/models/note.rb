# frozen_string_literal: true

class Note < ApplicationRecord
  belongs_to :user
  validates :title, :description, presence: true
  validates :title, uniqueness: true
end
