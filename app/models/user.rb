class User < ApplicationRecord
  has_many :sales, dependent: :destroy
  has_many :invoices, dependent: :destroy
end
