Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  scope '/api' do

    # nested user resources
    scope '/users/:user_id' do
      get  '/accounts',        to: 'accounts#index'
      post '/accounts/search', to: 'accounts#search'

      # notifications
      get '/notifications',     to: 'notificatins#index'
      get '/notifications/:id', to: 'notifications#show'

      # transactions
      get  '/transactions',        to: 'transactions#index'
      post '/transactions',        to: 'transactions#create'
      get  '/transactions/:id',    to: 'transactions#show'
      put  '/transactions/:id',    to: 'transactions#update'
      post '/transactions/search', to: 'trasactions#search'

      # triggered events
      get  'triggered-events',        to: 'triggered_events#index'
      get  'triggered-events/:id',    to: 'triggered_events#show'
      post 'triggered-events',         to: 'triggered_events#create'
      post 'triggered-events/search', to: 'triggered_events#search'

      # triggers
      get    '/triggers',        to: 'triggers#index'
      post   '/triggers',        to: 'triggers#create'
      get    '/triggers/:id',    to: 'triggers#show'
      put    '/triggers/:id',    to: 'triggers#update'
      delete '/triggers/:id',    to: 'triggers#destroy'
      post   '/triggers/search', to: 'triggers#search'
    end

    # user endpoints
    post   '/users',     to: 'users#create'
    get    '/users',     to: 'users#index'
    get    '/users/:user_id', to: 'users#show'
    put    '/users/:user_id', to: 'users#update'
    delete '/users/:user_id', to: 'users#destroy'

    # route to establish a new user session
    post   '/session', to: 'sessions#create'
    delete '/session', to: 'sessions#destroy'
  end
end
