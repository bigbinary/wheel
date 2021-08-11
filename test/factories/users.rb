# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { "john.doe@example.com" }
    first_name { "John" }
    last_name { "Doe" }
    role { "standard" }
    password { "welcome" }

    trait :admin do
      email { "admin@example.com" }
      first_name { "Adam" }
      last_name { "Smith" }
      role { "super_admin" }
    end

    trait :nancy do
      email { "nancy.smith@example.com" }
      first_name { "Nancy" }
      last_name { "Smith" }
    end
  end
end
