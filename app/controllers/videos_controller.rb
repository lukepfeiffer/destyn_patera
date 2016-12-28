class VideosController < ApplicationController
  expose :video
  expose :videos do
    Video.all
  end

  def create
    url_first_half = video.vimeo_url.split('//').second.split('/').first.prepend('http://player.')
    url_second_half = video.vimeo_url.split('//').second.split('/').second.prepend('/video/')
    whole_url = url_first_half + url_second_half
    video.vimeo_url = whole_url
    if video.save
      redirect_to videos_path
    else
      redirect_to videos_path
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
