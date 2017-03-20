class PagesController < ApplicationController

  expose :modal_video do
  end

  expose :homepage_thumbnails do
    HomepageThumbnail.all
  end

  def home
    @nav_image = true
  end

  def sign_in
    @nav_image = false
  end

  def video_modal
    render partial: 'video_modal', locals: {url: params[:url]}
  end

end
