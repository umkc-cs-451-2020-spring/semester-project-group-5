class CreateLoginHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :login_histories do |t|
      t.string :state
      t.belongs_to :user
      t.timestamps
    end
  end
end
