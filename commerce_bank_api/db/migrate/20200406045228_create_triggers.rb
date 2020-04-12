class CreateTriggers < ActiveRecord::Migration[6.0]
  def change
    create_table :triggers do |t|
      t.string :trigger_type

      t.timestamps
    end
  end
end
