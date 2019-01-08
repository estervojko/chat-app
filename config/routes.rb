Rails.application.routes.draw do
  resources :chatrooms
  scope '/api' do
    post 'user_token' => 'user_token#create'
    resources :users
    resources :messages do
      collection do
        get 'mine'
      end
    end
    mount ActionCable.server => '/cable'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
