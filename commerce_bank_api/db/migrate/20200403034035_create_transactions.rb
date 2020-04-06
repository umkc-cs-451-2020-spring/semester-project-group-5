class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.decimal :amount, precision: 9, scale: 2
      t.integer :account_number
      t.string :category
      t.text :description
      t.string :state
      t.boolean :hidden
      t.belongs_to :users
      t.timestamps
    end
  end
end
