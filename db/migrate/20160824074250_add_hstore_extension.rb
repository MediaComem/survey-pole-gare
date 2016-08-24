class AddHstoreExtension < ActiveRecord::Migration[5.0]
  def change
  	execute 'CREATE EXTENSION hstore'
  end
end
