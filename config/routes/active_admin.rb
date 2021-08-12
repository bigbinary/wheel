# frozen_string_literal: true

authenticate :user, ->(u) { u.super_admin? } do
  ActiveAdmin.routes(self)
end

authenticate :user, ->(u) { !u.super_admin? } do
  get "/active_admin" => redirect("/")
end
