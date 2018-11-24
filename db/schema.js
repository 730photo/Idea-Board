const Schema = require('mongoose').Schema

//the title and description of the idea will be a string
const IdeaSchema = new Schema({
    description: String
})

//the userName and pw will be strings, the Ideas will be arrays

const UserSchema = new Schema({
    userName: String,
    password: String,
    ideas: [IdeaSchema]
})
module.exports = {
    UserSchema,
    IdeaSchema
}