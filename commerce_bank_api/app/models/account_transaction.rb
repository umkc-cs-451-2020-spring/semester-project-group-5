class AccountTransaction < ApplicationRecord
  include GenerateCSV
  include States
  belongs_to :account
  has_many :triggered_events
  after_create :run_triggers

  before_validation :uppercase_transaction_type
  validates :transaction_type,
    presence: true,
    inclusion: { in: %w(DR CR) }

  validates :amount, presence: true

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
