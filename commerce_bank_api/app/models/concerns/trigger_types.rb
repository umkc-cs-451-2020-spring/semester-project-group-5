module TriggerTypes
  extend ActiveSupport::Concern

  included do
    validates :trigger_type,
    presence: true,
    inclusion: { in: :trigger_types, message: "%{value} is not a valid trigger" }
  end

  def trigger_types
    [
    'LowAccountBalanceTrigger',
    'LargeWithdrawalTrigger',
    'OutofStateTransactionTrigger'
    ]
end
end