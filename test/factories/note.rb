# frozen_string_literal: true

FactoryBot.define do
  factory :note do

    trait :milk do
      title { "Buy Milk" }
      description { "Buy 1 liter milk from grocery store" }
      user
    end

    trait :rent do
      title { "Pay Rent" }
      description { "Transfer $500 to landlord by Monday" }
      user
    end

    trait :bulbs do
      title { "Fix bulbs" }
      description { "Change the lighbulbs in the foyer" }
      user
    end
  end
end
