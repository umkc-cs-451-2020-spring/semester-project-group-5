class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.blob :message, null: false
      t.boolean :read, null: false, default: false
      t.belongs_to :user
      t.timestamps
    end
  end
end