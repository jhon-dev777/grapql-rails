# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(
  ci: 400001,
  first_name: 'jose',
  last_name: 'martinez',
  phone: 331431513,
  email: 'jose.martinez@test.com'
)
User.create(
  ci: 400001,
  first_name: 'maria',
  last_name: 'aguilar',
  phone: 331431513,
  email: 'maria.aguilar@test.com'
)
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
sale1 = Sale.create(
    code:124,
    products: ["PS5", "Switch", "Xbox"],
    total_amount: 1800,
    promotion: promotion,
    user:user
)
sale2 = Sale.create(
  code:124,
  products: ["PC"],
  total_amount: 1800,
  promotion: promotion,
  user:user
)

Invoice.create(
    sale:sale1,
    available: true,
    user:user
)
Invoice.create(
  sale:sale2,
  available: true,
  user:user
)

