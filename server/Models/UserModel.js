const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = Schema({
  name: String,
  password: String,
  email: String,
  phone: Number,
})

module.exports = mongoose.model('User', UserSchema)
