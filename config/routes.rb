# frozen_string_literal: true

Rails.application.routes.draw do
  draw :sidekiq
  draw :api

  root "home#index"
  get "*path", to: "home#index", via: :all
end
