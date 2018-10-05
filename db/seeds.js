// requiring dotenv and requiring mongoose
require('dotenv').config()
const mongoose = require('mongoose')

// connecting mongoose to the database
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)

const { User, Idea } = require('./model')

//users ne idea ideas
const mars = new Idea({
  title: 'Fly to Mars',
  description: "Earth isn't Red enough. Let's move to a new planet",
})
const tesla = new Idea({
  title: 'Build a Car',
  description:
    "Gas is too expensive. I'm gonna build a car that doesn't need gas",
})

// users username and pw

const elon = new User({
  userName: 'elon_musk',
  password: 'spaceiscool',
  ideas: [mars, tesla],
})

//saving the data
User.remove({})
  .then(() => elon.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())