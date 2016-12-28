class AddDropboxUrlToCategories < ActiveRecord::Migration[5.0]
  def change
    add_column :categories, :dropbox_url, :string
  end
end
