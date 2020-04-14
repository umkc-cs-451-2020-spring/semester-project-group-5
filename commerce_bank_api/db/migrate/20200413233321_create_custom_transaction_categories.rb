class CreateCustomTransactionCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :custom_transaction_categories do |t|
      t.string :category
      t.belongs_to :user
      t.timestamps
    end
  end
end
