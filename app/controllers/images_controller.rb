class ImagesController < ApplicationController
  expose :image
  expose :images do
    Image.all.order('created_at DESC')
  end
end
