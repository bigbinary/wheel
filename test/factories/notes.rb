# frozen_string_literal: true

FactoryBot.define do
  factory :note do
    association :user
    title { Faker::Lorem.sentence[0..49] }
    description { Faker::Lorem.sentence }
  end
end
