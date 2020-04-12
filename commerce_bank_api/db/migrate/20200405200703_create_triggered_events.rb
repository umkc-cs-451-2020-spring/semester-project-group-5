class CreateTriggeredEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :triggered_events do |t|
      t.string :event_type
      t.timestamps
    end
  end
end

