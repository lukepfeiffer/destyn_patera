class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :vimeo_url
      t.string :title
      t.string :thumbnail_url
    end
  end
end
