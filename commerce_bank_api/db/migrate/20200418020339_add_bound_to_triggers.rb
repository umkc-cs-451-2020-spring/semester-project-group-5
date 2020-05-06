class AddBoundToTriggers < ActiveRecord::Migration[6.0]
  def change
    add_column :triggers, :bound, :decimal, precision: 9, scale: 2
  end
end
