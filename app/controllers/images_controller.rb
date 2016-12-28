class ImagesController < ApplicationController
  before_action :authenticate_user, only: [:index, :create, :edit, :update, :delete]
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

  private

  def image_params
    params.require(:image).permit(
      :dropbox_url,
      :category_id
    )
  end

  def authenticate_user
    if current_user.nil?
      redirect_to root_path
    end
  end
end
