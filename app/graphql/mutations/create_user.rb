class Mutations::CreateUser < Mutations::BaseMutation
    # arguments :ci, Integer, require: true
    # arguments :fisrt_name, String, require: true
    # arguments :last_name, String, require: true
    # arguments :phone, Integer, require: true
    # arguments :email, String, require: true

    # field :User, Types::UserType, null: false
    # field :errors, [String], null:false

    # def resolve(ci:, first_name:, last_name:, phone:, email:)
    #     user = User.new(first_name: first_name, last_name: last_name, ci: ci, phone: phone, email:email)
    #     if user.save
    #         {user: user, errors: []}
    #     else
    #         {user:nill, errors: user.errors.full_messages}
    #     end
    # end

    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :email, String, required: true
    argument :phone, Integer, required: true
    argument :ci, Integer, required: true
  
    field :user, Types::UserType, null: false
    field :errors, [String], null: false
  
    def resolve(first_name:, last_name:, email:, phone:, ci:)
      user = User.new(first_name: first_name, last_name: last_name, email: email, phone: phone, ci: ci)
  
      if user.save
        { user: user, errors: [] }
      else
        { user: nil, errors: user.errors.full_messages }
      end
    end
end