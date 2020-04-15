class Trigger < ApplicationRecord
    include TriggerTypes
    belongs_to :account
    has_many :triggered_events
end
