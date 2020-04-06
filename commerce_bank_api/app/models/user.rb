class User < ApplicationRecord
  validates_presence_of :email, :username, :last_name, :first_name
  validates :email, presence: true, uniqueness: true
  has_many :transactions
end
