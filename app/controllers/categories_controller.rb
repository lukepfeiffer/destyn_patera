class CategoriesController < ApplicationController

  expose :category
  expose :categories do
    Category.all
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

  def category_params
    params.require(:category).permit(
      :title
    )
  end

end
