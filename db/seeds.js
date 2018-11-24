// requiring dotenv and requiring mongoose
require('dotenv').config()
const mongoose = require('mongoose')

// connecting mongoose to the database
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)

const { User, Idea } = require('./model')

//users new idea
const todo = new Idea({
  description: "Finish projects for showcase",
})


// users username and pw

const architekespy = new User({
  userName: 'architekespy',
  password: 'dunkedon8',
  ideas: [],
})

//saving the data
User.remove({})
  .then(() => architekespy.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())