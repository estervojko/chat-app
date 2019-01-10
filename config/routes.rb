Rails.application.routes.draw do
  scope '/api' do
    post 'user_token' => 'user_token#create'
    resources :users
    resources :chatrooms do
      resources :messages do
        collection do
          get 'mine'
        end
      end
    end
    mount ActionCable.server => '/cable'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
