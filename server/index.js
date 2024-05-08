const express = require('express')
const app = express()
const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})