class Transaction < ApplicationRecord
  validates :transaction_id, presence: true, uniqueness: true
  validates :amount, presence: true
end
