Rails.application.routes.draw do
  root 'pages#home'
  resources :users, only: [:new, :edit, :update]
  resources :categories
  resources :images
  resources :videos
  resources :homepage_thumbnails, only: [:edit, :update, :new, :create]

  get '/sign_in', to: 'pages#sign_in'
  get '/photos', to: 'categories#photos'
  get '/video_modal', to: 'pages#video_modal'
  get '/preview_route', to: 'homepage_thumbnails#preview_route'

  post '/sign_in', to: 'sessions#create'

  delete '/sign_out', to: 'sessions#destroy'
end
