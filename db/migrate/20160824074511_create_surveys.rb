class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
    	t.string :q1
      t.hstore :q2
      t.string :q3

      t.timestamps
    end
  end
end