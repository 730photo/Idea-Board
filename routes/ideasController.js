// requiring express 
const router = require('express').Router()
const { User, Idea } = require('../db/model')

// making a promise when you click on the 'new idea' button
router.post('/', (req, res) => {
  const newIdea = new Idea()
  User.findById(req.params.userId)
    .then((user) => {
      user.ideas.push(newIdea)
      return user.save()
    })
    .then((user) => {
      res.send(user)
    })
    .catch(error => {
        console.log(error)
    })
})

// making a promise when you click on the delete button
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        return user.update({ $pull: {ideas: {_id: req.params.id } } })
    })
    .then(user => {
        res.send(user)
    })
})

// making a promise when you click on a user

router.put('/:id', (req, res) => {
    User.findById(req.params.Userid)
    .then(user => {
        const idea = user.ideas.id(req.params.id)
        const updatedIdea = req.body

        if (updatedIdea.title) {
            idea.title = updatedIdea.title
        }
        if (updatedIdea.description) {
            idea.description = updatedIdea.description
        }
    })
})

module.exports = router
