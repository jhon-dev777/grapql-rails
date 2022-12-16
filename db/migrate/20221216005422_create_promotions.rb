class CreatePromotions < ActiveRecord::Migration[7.0]
  def change
    create_table :promotions do |t|
      t.string :name
      t.string :description
      t.integer :discount

      t.timestamps
    end
  end
end
