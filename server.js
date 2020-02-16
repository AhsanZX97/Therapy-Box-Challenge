var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./routes/Users')

app.use('/users', Users)

// An api endpoint that returns a short list of items
app.get('/football', (req, res) => {
    const csvFilePath = './database/I1.csv'
    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            res.send(jsonObj)
        })
});

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})