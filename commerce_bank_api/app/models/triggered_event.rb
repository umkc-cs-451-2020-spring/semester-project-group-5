class TriggeredEvent < ApplicationRecord
    validates_presence_of  :account_number :transaction_id :type
end

