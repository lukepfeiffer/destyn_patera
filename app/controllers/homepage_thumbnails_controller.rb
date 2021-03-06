class HomepageThumbnailsController < ApplicationController
  expose :homepage_thumbnail

  def update
    video_url = homepage_thumbnail.video_url
    unless params[:homepage_thumbnail][:video_url].include?('player')
      video_url = UrlHelper.update_vimeo(params[:homepage_thumbnail][:video_url])
    end

    homepage_thumbnail.update(homepage_thumbnail_params)
    homepage_thumbnail.update(video_url: video_url)
    redirect_to root_path
  end

  def preview_route
    video_url = UrlHelper.modify_vimeo(params[:video_url])
    image_route = params[:image_url]
    caption = params[:caption]
    render partial: 'preview', locals: {caption: caption, image_route: image_route, video_url: video_url}
  end

  def edit
    unless current_user.present?
      redirect_to root_path
    end
  end

  def new
    unless current_user.present?
      redirect_to root_path
    end
  end

  def create
    homepage_thumbnail = HomepageThumbnail.new(homepage_thumbnail_params)
    
    homepage_thumbnail.video_url = UrlHelper.update_vimeo(params[:homepage_thumbnail][:video_url])
    homepage_thumbnail.save
    redirect_to root_path
  end

  def destroy
    homepage_thumbnail.delete
    redirect_to :root
  end

  private
  def homepage_thumbnail_params
    params.require(:homepage_thumbnail).permit(
      :video_url,
      :image_url,
      :caption
    )
  end

end
