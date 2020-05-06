class Trigger < ApplicationRecord
    include TriggerTypes
    belongs_to :account
    has_many :triggered_events

    def is_activated_by?(transaction)
        case self.trigger_type
        when 'LowAccountBalanceTrigger'
            transaction.end_balance < self.bound
        when 'LargeWithdrawalTrigger'
            transaction.amount >= self.bound
        when 'OutofStateTransactionTrigger'
            transaction.state != self.account.user.state
        end
    end

    def Trigger.run_account_triggers(transaction)
        account = transaction.account
        account.triggers.each do |trigger|
            if trigger.is_activated_by?(transaction)
                triggered_event = TriggeredEvent.new
                triggered_event.trigger_type = trigger.trigger_type
                triggered_event.account = account
                triggered_event.account_transaction = transaction
                triggered_event.trigger = trigger
                triggered_event.save
            end

        end
    end
end

# transaction = Transaction.find(69)
# trigger = Trigger.find(420)
# trigger.is_activated_by?(transaction)

# account = Account(69)
# transaction = Transaction.find(420)
# Trigger.run_account_triggers(account, transaction)

