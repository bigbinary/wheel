# frozen_string_literal: true

Rails.application.routes.draw do

  devise_for :users, path_prefix: "devise", controllers: { registrations: "registrations" }
  get "/logout" => "sessions#destroy", :as => :logout
  devise_scope :user do
    scope "my" do
      put "profile/update", to: "registrations#update"
      put "password/update", to: "registrations#update_password"
    end
  end

  authenticate :user, ->(u) { u.super_admin? } do
    ActiveAdmin.routes(self)
    namespace :superadmin do
      root to: "users#index"
      resources :users
    end
  end

  draw :sidekiq

  authenticate :user, ->(u) { !u.super_admin? } do
    get "/active_admin" => redirect("/")
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      devise_scope :user do
        post "login" => "sessions#create", as: "login"
        delete "logout" => "sessions#destroy", as: "logout"
      end

      resources :users, only: [:show, :create, :update, :destroy], constraints: { id: /.*/ }
      resources :notes, only: [:index, :create] do
        collection do
          post "bulk_delete"
        end
      end
    end
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
