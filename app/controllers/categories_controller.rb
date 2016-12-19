class CategoriesController < ApplicationController

  expose :category
  expose :categories do
    Category.all
  end

  def photos
  end

  def show
    render partial: 'modal', locals: {category: category}
  end

end
