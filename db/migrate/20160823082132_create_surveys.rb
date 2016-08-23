class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
      t.string :q1
      t.text :q2

      t.timestamps
    end
  end
end
