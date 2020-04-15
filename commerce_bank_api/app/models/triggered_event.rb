class TriggeredEvent < ApplicationRecord
    include TriggerTypes
    validates_presence_of :event_type
    belongs_to :account
    belongs_to :trigger
    belongs_to :transaction
end

