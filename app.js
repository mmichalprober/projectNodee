const express = require('express')
const app = express()
const router = require('./routers/api')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')
const env = require('dotenv')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
env.config()
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONECT, connectionParams).then(
    () => { console.log('connect') }
).catch((err) => { console.log(err) })


app.use('/', router)
app.listen(3001, () => {
    console.log('listing')
})