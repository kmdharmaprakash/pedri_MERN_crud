const mongoose = require('mongoose');
const Schema = mongoose.Schema

const foodSchema = new Schema({
    foodName: {type: String}, 
    days: {type: Number}
})

const Food = mongoose.model('Food', foodSchema);
module.exports = Food