# frozen_string_literal: true

FactoryBot.define do
  factory :abbreviation do
    name { "MyString" }
    description { "MyString" }
    psmf_document { nil }
  end
end
