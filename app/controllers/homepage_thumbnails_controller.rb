class HomepageThumbnailsController < ApplicationController
  expose :homepage_thumbnail

  def update
    if homepage_thumbnail.save
      redirect_to root_path
    else
      render '/homepage_thumbnails/edit'
    end
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
