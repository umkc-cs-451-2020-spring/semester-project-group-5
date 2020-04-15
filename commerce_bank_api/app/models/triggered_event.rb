class TriggeredEvent < ApplicationRecord
    validates_presence_of :event_type
    belongs_to :account
end

