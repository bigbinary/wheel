class Contact
  include ActiveModel::Model

  attr_accessor :email, :title, :body

  validates :email, :title, presence: true
  validates :email, email: true
end
