class AccountTransaction < ApplicationRecord
  include GenerateCSV
  include States
  belongs_to :account
  has_many :triggered_events
  after_create :run_triggers

  before_validation :uppercase_transaction_type
  before_create :adjust_balance!

  validates :transaction_type,
    presence: true,
    inclusion: { in: %w(DR CR) }

  validates :amount, presence: true
  validate :validate_withdrawal!, on: :create

  def validate_withdrawal!
    if transaction_type == "CR" and account.balance - amount < 0.00
      errors.add(:account,"Insufficient funds to perform transaction")
    end
  end

  def adjust_balance!
    self.start_balance = account.balance
    if transaction_type == "CR"
      account.balance = (account.balance - amount)
    elsif transaction_type == "DR"
      account.balance = (account.balance + amount)
    end
    account.save
    self.end_balance = account.balance
  end

  private
  def uppercase_transaction_type
    self.transaction_type.upcase!
  end

  def run_triggers
    if transaction_type == 'CR'
      Trigger.run_account_triggers(self)
    end
  end
end
