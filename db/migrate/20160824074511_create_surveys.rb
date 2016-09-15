class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
    	t.hstore :q1
    	t.string :q2
    	t.string :q3
    	t.hstore :q4
    	t.string :q5
      t.hstore :q6
      t.hstore :q7
      t.hstore :q8
      t.hstore :q9
      t.string :q10
      t.hstore :q10a
      t.hstore :q14
      t.string :q28
      t.timestamps
    end
  end
end