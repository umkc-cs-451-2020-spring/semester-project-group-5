class User < ApplicationRecord
  include States
  has_secure_password

  validates_presence_of :last_name, :first_name, :state
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
end