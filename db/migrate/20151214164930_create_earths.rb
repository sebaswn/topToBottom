class CreateEarths < ActiveRecord::Migration
  def change
    create_table :earths do |t|

      t.timestamps null: false
    end
  end
end
