# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160824074511) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "surveys", force: :cascade do |t|
    t.string   "q1"
    t.hstore   "q2"
    t.string   "q3"
    t.hstore   "q4"
    t.string   "q5"
    t.hstore   "q6"
    t.hstore   "q7"
    t.hstore   "q8"
    t.hstore   "q9"
    t.string   "q10"
    t.hstore   "q10a"
    t.hstore   "q11"
    t.hstore   "q12"
    t.hstore   "q13"
    t.hstore   "q14"
    t.hstore   "q15"
    t.string   "q16"
    t.string   "q17"
    t.hstore   "q17a"
    t.string   "q17b"
    t.string   "q19"
    t.string   "q20"
    t.string   "q21"
    t.string   "q22"
    t.hstore   "q22a"
    t.string   "q23"
    t.string   "q24"
    t.string   "q25"
    t.string   "q26"
    t.string   "q27"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
