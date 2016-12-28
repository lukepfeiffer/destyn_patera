class VideosController < ApplicationController
  expose :video
  expose :videos do
    Video.all
  end
end
