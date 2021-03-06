Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  scope '/api' do

    # nested user resources
    scope '/users/:user_id' do
      get  '/accounts',        to: 'accounts#index'
      post '/accounts', to: 'accounts#create'
      post '/accounts/search', to: 'accounts#search'
      put  '/accounts', to: 'accounts#update'

      # Custom User Transaction Categories
      post '/custom-transaction-categories', to: 'custom_transaction_categories#create'
      get '/custom-transaction-categories', to: 'custom_transaction_categories#index'
      delete '/custom-transaction-categories/:id', to: 'custom_transaction_categories#destroy'

      # notifications
      get '/notifications',     to: 'notifications#index'
      get '/notifications/:id', to: 'notifications#show'
      put '/notifications/:id', to: 'notifications#update'
    end

    # transactions
    post '/transactions',        to: 'transactions#create'
    get  '/transactions/:id',    to: 'transactions#show'
    put  '/transactions/:id',    to: 'transactions#update'
    post '/transactions/search', to: 'transactions#search'
    post '/transactions/download', to: 'transactions#csv_index'

    # triggers
    post   '/triggers',        to: 'triggers#create'
    get    '/triggers/:id',    to: 'triggers#show'
    put    '/triggers/:id',    to: 'triggers#update'
    delete '/triggers/:id',    to: 'triggers#destroy'
    post   '/triggers/search', to: 'triggers#index'

    # triggered events
    get  'triggered-events/:id',    to: 'triggered_events#show'
    post 'triggered-events/search', to: 'triggered_events#index'
    post 'triggered-events/download', to: 'triggered_events#csv_index'

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
