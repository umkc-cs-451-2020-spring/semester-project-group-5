class Transaction < ApplicationRecord
  validates :amount, presence: true
  validates :state, presence: true
  belongs_to :user
end
