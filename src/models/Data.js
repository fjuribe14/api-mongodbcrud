const { Schema, model } = require('mongoose')

const dataSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('Data', dataSchema)