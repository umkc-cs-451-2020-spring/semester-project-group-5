class TriggeredEvent < ApplicationRecord
    validates_presence_of :trigger_type
    belongs_to :account
    belongs_to :trigger
    belongs_to :account_transaction
end

