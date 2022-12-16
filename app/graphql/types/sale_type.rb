# frozen_string_literal: true

module Types
  class SaleType < Types::BaseObject
    field :id, ID, null: false
    field :code, Integer
    field :products, String
    field :total_amount, Integer
    field :promotion_id, Integer, null: false
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user, UserType
    field :promotion, PromotionType
  end
end
