# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :ci, Integer
    field :first_name, String
    field :last_name, String
    field :phone, Integer
    field :email, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :full_name, String
    def full_name 
      [object.first_name, object.last_name].compact.join(" ")
    end 
  end
end
