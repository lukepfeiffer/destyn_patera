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

ActiveRecord::Schema.define(version: 20170320032918) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authem_sessions", force: :cascade do |t|
    t.string   "role",                    null: false
    t.string   "subject_type",            null: false
    t.integer  "subject_id",              null: false
    t.string   "token",        limit: 60, null: false
    t.datetime "expires_at",              null: false
    t.integer  "ttl",                     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["expires_at", "subject_type", "subject_id"], name: "index_authem_sessions_subject", using: :btree
    t.index ["expires_at", "token"], name: "index_authem_sessions_on_expires_at_and_token", unique: true, using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "dropbox_url"
  end

  create_table "homepage_thumbnails", force: :cascade do |t|
    t.string   "video_url"
    t.string   "image_url"
    t.string   "caption"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string   "dropbox_url"
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.string   "password_reset_token", limit: 60, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "videos", force: :cascade do |t|
    t.string   "vimeo_url"
    t.string   "title"
    t.string   "thumbnail_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
