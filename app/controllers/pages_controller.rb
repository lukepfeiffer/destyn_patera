class PagesController < ApplicationController

  expose :video do
  end

  def home
    @nav_image = true
  end

  def sign_in
    @nav_image = false
  end
end
