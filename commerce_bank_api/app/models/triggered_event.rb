class TriggeredEvent < ApplicationRecord
    include GenerateCSV
    validates_presence_of :trigger_type
    belongs_to :account
    belongs_to :trigger
    belongs_to :account_transaction
    after_create :send_notification

    # It would be much better to set each of these up as I18n strings in a locals file, but I didn't have time to set one up
    def send_notification
        case self.trigger_type
        when 'LowAccountBalanceTrigger'
            Notification.create(
                user: self.account.user,
                title: 'Low Account Balance',
                message: <<~EOS
                           Account #{self.account.account_number} (#{self.account.name}) has a balance below \
                           $#{self.trigger.bound}. Please review your transactions and try to reduce spending
                         EOS
            )
        when 'LargeWithdrawalTrigger'
            Notification.create(
                user: self.account.user,
                title: 'Large Withdrawal',
                message: <<~EOS
                           Transaction of $#{self.account_transaction.amount} has occurred on account #{self.account.account_number}. \
                           Please take time to review your transactions report anything that appears to be incorrect.
                         EOS
            )
        when 'OutOfStateTransactionTrigger'
            Notification.create(
                user: self.account.user,
                title: 'Out of State Transaction',
                message: <<~EOS
                           Transaction on account #{self.account.account_number} of $#{self.account_transaction.amount} \
                           occurred in #{self.transaction.state}. Please reach out to customer service if this was not you.
                         EOS
            )
        end
    end
end

