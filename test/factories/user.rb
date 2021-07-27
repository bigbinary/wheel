# frozen_string_literal: true

FactoryBot.define do
  factory :user do

    trait :admin do
      email { "admin@example.com" }
      first_name { "Adam" }
      last_name { "Smith" }
      password { "welcome" }
      role { "super_admin" }
    end

    trait :nancy do
      email { "nancy.smith@example.com" }
      first_name { "Nancy" }
      last_name { "Smith" }
      password { "welcome" }
    end
  end
end

