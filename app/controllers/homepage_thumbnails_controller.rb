class HomepageThumbnailsController < ApplicationController
  expose :homepage_thumbnail

  def update
    if homepage_thumbnail.save
      redirect_to root_path
    else
      render '/homepage_thumbnails/edit'
    end
  end

  def preview_route
    video_url = params[:video_url]
    image_route = params[:image_url]
    caption = params[:caption]
    render partial: 'preview', locals: {caption: caption, image_route: image_route, video_url: video_url}
  end

  def edit
  end

  def homepage_thumbnails_params
    params.require(:homepage_thumbnail).permit(
      :video_url,
      :image_url,
      :caption
    )
  end

end
