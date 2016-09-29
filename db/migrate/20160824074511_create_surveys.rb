class CreateSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :surveys do |t|
      t.string :q1
    	t.hstore :q2
    	t.string :q3
    	t.hstore :q4
    	t.string :q5
      t.hstore :q6
      t.hstore :q7
      t.hstore :q8
      t.hstore :q9
      t.hstore :q10
      t.hstore :q11
      t.hstore :q101
      t.string :q12
      t.hstore :q12a
      t.hstore :q13
      t.hstore :q14
      t.hstore :q15
      t.string :q16
      t.string :q17
      t.hstore :q17a
      t.string :q17b
      t.string :q19
      t.string :q20
      t.string :q21
      t.string :q22
      t.hstore :q22a
      t.string :q23
      t.string :q24
      t.string :q25
      t.string :q26
      t.string :q27
      t.string :q28
      t.string :q29
      t.string :user_agent
      t.string :ip_adress
      t.timestamps
    end
  end
end