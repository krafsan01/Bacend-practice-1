const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Connect with database
mongoose
  .connect(
    'mongodb+srv://krafsan01:01571704910@cluster0.amt7vco.mongodb.net/?retryWrites=true&w=majority',
  )
  .then((res) => console.log('Database connected'))
  .catch((err) => console.log(err))

const userRoute = require('./Routes/UserRoute')
app.use(userRoute)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(5000, () => {
  console.log(`Example app listening on port `)
})
