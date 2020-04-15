class AccountTransaction < ApplicationRecord
  include States
  belongs_to :account
  has_many :triggered_events

  before_validation :uppercase_transaction_type
  validates :transaction_type,
    presence: true,
    inclusion: { in: %w(DR CR) }

  validates :amount, presence: true

  private
  def uppercase_transaction_type
    self.transaction_type.upcase!
  end
end
