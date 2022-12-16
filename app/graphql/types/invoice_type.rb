# frozen_string_literal: true

module Types
  class InvoiceType < Types::BaseObject
    field :id, ID, null: false
    field :sale_id, Integer, null: false
    field :available, Boolean
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user,UserType, null:false
    field :sale, SaleType
  end
end
