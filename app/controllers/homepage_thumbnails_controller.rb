class HomepageThumbnailsController < ApplicationController
  expose :homepage_thumbnail

  def update
    homepage_thumbnail.update(homepage_thumbnail_params)
    redirect_to root_path
  end

  def preview_route
    video_url = params[:video_url]
    image_route = params[:image_url]
    caption = params[:caption]
    render partial: 'preview', locals: {caption: caption, image_route: image_route, video_url: video_url}
  end

  def edit
    unless current_user.present?
      redirect_to root_path
    end
  end

  def homepage_thumbnail_params
    params.require(:homepage_thumbnail).permit(
      :video_url,
      :image_url,
      :caption
    )
  end

end
