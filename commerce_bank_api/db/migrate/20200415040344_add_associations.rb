class AddAssociations < ActiveRecord::Migration[6.0]
  def change
    add_reference :triggered_events, :transaction
    add_reference :triggered_events, :trigger
  end
end
