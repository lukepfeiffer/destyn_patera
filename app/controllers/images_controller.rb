class ImagesController < ApplicationController
  before_action :authenticate_user, only: [:index, :create, :edit, :update, :destroy]
  expose :image
  expose :images do
    Image.all.order('created_at DESC')
  end
  expose :categories do
    Category.all
  end

  def create
    if image.save
      redirect_to images_path
    else
      redirect_to images_path
    end
  end

  def destroy
    image.delete
    redirect_to images_path
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
