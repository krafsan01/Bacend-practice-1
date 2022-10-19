const User = require('../Models/UserModel')
exports.CreateUser = async (req, res) => {
  const NewUser = await new User({
    name: 'zim',
    email: 'zim@gmail.com',
    password: '12345',
    phone: '017182889',
  }).save()

  res.json(NewUser)
  console.log(NewUser)
}
