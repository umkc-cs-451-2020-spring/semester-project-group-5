class Trigger < ApplicationRecord
    validates :type,
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
