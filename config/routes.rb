Rails.application.routes.draw do
  root 'pages#home'
  resources :users, only: [:new, :edit, :update]

  get '/sign_in', to: 'pages#sign_in'

  post '/sign_in', to: 'sessions#create'

  delete '/sign_out', to: 'sessions#destroy'
end
