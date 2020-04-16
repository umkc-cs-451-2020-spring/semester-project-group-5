class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :account_transactions do |t|
      t.decimal :amount, precision: 9, scale: 2
      t.string :category
      t.text :description
      t.string :state
      t.boolean :hidden, default: false
      t.timestamps
    end
  end
end
