class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
    	t.hstore :q1
    	t.string :q2

      t.timestamps
    end
  end
end