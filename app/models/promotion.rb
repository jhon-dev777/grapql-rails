class Promotion < ApplicationRecord
  has_many :sales, dependent: :destroy
end
