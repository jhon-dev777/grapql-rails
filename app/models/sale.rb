class Sale < ApplicationRecord
  belongs_to :promotion
  belongs_to :user
  # has_many :user, dependent: :destroy
end
