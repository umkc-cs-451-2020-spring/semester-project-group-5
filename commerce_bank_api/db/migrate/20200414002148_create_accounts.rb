class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.belongs_to :user
      t.integer :account_number, null: false
      t.decimal :balance, precision: 9, scale: 2, default: 0, null: false
      t.string :name
      t.timestamps
    end

    add_reference :transactions, :account
    add_reference :triggers, :account
    add_reference :triggered_events, :account
  end
end
