class Trigger < ApplicationRecord
    belongs_to :account
    validates :trigger_type,
               presence: true,
               inclusion: { in: :trigger_types, message: "%{value} is not a valid trigger" }

      
    def trigger_types
        [
        'LowAccountBalanceTrigger',
        'LargeWithdrawalTrigger',
        'OutofStateTransactionTrigger'
        ]
    end

end
