class AddTransactionTypes < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :transaction_type, :string
    add_column :transactions, :start_balance, :decimal, precision: 9, scale: 2
    add_column :transactions, :end_balance, :decimal, precision: 9, scale: 2
  end
end
