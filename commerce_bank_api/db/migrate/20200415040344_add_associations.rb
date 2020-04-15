class AddAssociations < ActiveRecord::Migration[6.0]
  def change
    add_reference :triggered_events, :account_transaction
    add_reference :triggered_events, :trigger
  end
end
