class CreateFamilyNannies < ActiveRecord::Migration
  def change
    create_table :family_nannies do |t|
      t.integer :family_id, null: false
      t.integer :nanny_id,  null: false

      t.timestamps null: false
    end
  end
end
