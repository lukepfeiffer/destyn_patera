class CategoriesController < ApplicationController
  before_action :authenticate_user, only: [:create, :edit, :update, :delete]

  expose :category
  expose :categories do
    Category.all
  end
  expose :image do
    category.images.first
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
