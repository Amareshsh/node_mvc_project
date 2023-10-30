require('dotenv').config()

const express = require('express')
const app = express()
const productRoute = require('./routes/productRouter')

const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json())

app.use('/api', productRoute);

app.listen(PORT, () => {
    console.log('Node api router is running on port 3000')
})

mongoose.connect(MONGO_URL)
.then( () =>{
    console.log('connected to mongoDB successfully');
}).catch((error) => {
    console.log('error during connecting to mongo db database')
})

