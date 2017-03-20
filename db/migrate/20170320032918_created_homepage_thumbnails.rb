class CreatedHomepageThumbnails < ActiveRecord::Migration[5.0]
  def change
    create_table :homepage_thumbnails do |t|
      t.string :video_url
      t.string :image_url
      t.string :caption
      t.timestamps
    end
  end
end
