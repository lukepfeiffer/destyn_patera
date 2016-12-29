class CategoriesController < ApplicationController
  before_action :authenticate_user, only: [:create, :edit, :update, :destroy]

  expose :category
  expose :categories do
    Category.all.order('created_at DESC')
  end
  def photos
  end

  def create
    if category.save
      redirect_to photos_path
    else
      redirect_to new_categories_path
    end
  end

  def show
    render partial: 'modal', locals: {category: category}
  end

  def update
    if category.update(category_params)
      redirect_to categories_path
    else
      redirect_to edit_category_path(category)
    end
  end

  def destroy
    category = Category.find(params[:id])
    images = category.images
    images.destroy_all
    category.delete
    redirect_to photos_path
  end

  private

  def authenticate_user
    if current_user.nil?
      redirect_to root_path
    end
  end

  def category_params
    params.require(:category).permit(
      :title,
      :dropbox_url
    )
  end

end
