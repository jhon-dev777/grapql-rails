# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.create(
  ci: 400001,
  first_name: 'Pablo',
  last_name: 'Perez',
  phone: 331431513,
  email: 'pablo.perez@test.com'
)
promotion = Promotion.create(
  name: 'Hollyday',
  description: 'discount $30 per product',
  discount: 30
)
sale = Sale.create(
    code:124,
    products: ["PS5", "Switch", "Xbox"],
    total_amount: 1800,
    promotion: promotion,
    user:user
)

Invoice.create(
    sale:sale,
    available: true,
    user:user
)

