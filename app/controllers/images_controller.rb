class ImagesController < ApplicationController
  expose :image
  expose :images do
    Image.all.order('created_at DESC')
  end
  expose :categories do
    Category.all
  end

  def create
    if image.save
      render partial: 'image_container', locals: {image: image}
    else
      head :no_content
    end
  end

  def image_params
    params.require(:image).permit(
      :dropbox_url,
      :category_id
    )
  end
end
