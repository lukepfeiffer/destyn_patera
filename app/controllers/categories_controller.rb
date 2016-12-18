class CategoriesController < ApplicationController

  expose :category
  expose :categories do
    Category.all
  end

  def photos
  end

end
