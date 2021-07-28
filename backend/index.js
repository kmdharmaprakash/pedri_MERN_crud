const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const foodRoute = require('./routes/foodRoute');

mongoose.connect('mongodb://localhost:27017/mern-crud-food', {useNewUrlParser: true,
useUnifiedTopology: true}, (err) => {
    if(!err){
        console.log('mongo db connected')
    } else {
        console.log('mongo db  not connected')
    }
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.listen(8000, (err) => {
    if(!err){
        console.log('Server connected')
    } else {
        console.log('server not connected')
    }
})

app.use('/food', foodRoute);