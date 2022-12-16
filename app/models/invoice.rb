class Invoice < ApplicationRecord
  belongs_to :sale
  belongs_to :user
  has_many :invoices, dependent: :destroy
end
