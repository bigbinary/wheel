# frozen_string_literal: true

Rails.application.routes.draw do
  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end

  devise_for :users, path_prefix: "devise", controllers: { registrations: "profiles" }

  devise_scope :user do
    scope "my" do
      put "profile", to: "profiles#update"
      patch "password", to: "passwords#update"
      patch "email", to: "profiles#update_email"
    end
  end

  draw :sidekiq
  draw :api

  root "home#index"
  get "*path", to: "home#index", via: :all
end
