class VideosController < ApplicationController
  before_action :authenticate_user, only: [:create, :destroy, :edit, :update]
  expose :video
  expose :videos do
    Video.all.order('created_at DESC')
  end

  def create
    video.vimeo_url = UrlHelper.update_vimeo(video.vimeo_url)
    if video.save(video_params)
      redirect_to videos_path
    else
      redirect_to videos_path
    end
  end

  def update
    unless video.vimeo_url.include?('player')
      url_first_half = video.vimeo_url.split('//').second.split('/').first.prepend('http://player.')
      url_second_half = video.vimeo_url.split('//').second.split('/').second.prepend('/video/')
      whole_url = url_first_half + url_second_half
      video.vimeo_url = whole_url
    end
    if video.update(video_params)
      redirect_to videos_path
    else
      redirect_to edit_video_path(video)
    end
  end

  def destroy
    video.delete
    redirect_to videos_path
  end

  private

  def authenticate_user
    if current_user.nil?
      redirect_to root_path
    end
  end

  def video_params
    params.require(:video).permit(
      :vimeo_url,
      :thumbnail_url,
      :title
    )
  end
end
