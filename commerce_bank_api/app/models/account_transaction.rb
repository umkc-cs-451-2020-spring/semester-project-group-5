class AccountTransaction < ApplicationRecord
  include States
  belongs_to :account
  has_many :triggered_events

  before_validation :uppercase_transaction_type
  before_create :adjust_balance!

  validates :transaction_type,
    presence: true,
    inclusion: { in: %w(DR CR) }

  validates :amount, presence: true
  validate :validate_withdrawal!

  def validate_withdrawal!
    if @transaction.transaction_type == "CR" and @account.balance - @amount < 0.00
      errors.add(:account,"Insufficient funds to perform transaction")
    end
  end

  def adjust_balance!
    start_balance = @account.balance
    if @transaction.transaction_type == "CR"
      @account.balance -= @amount
    elsif @transaction.transaction_type == "DR"
      @account.balance += @amount      
    end
    end_balance = @account.balance
  end

  private
  def uppercase_transaction_type
    self.transaction_type.upcase!
  end
end
