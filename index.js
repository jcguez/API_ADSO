// Define all the constants of the code
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const cors = require('cors')


function verifyToken(req, res, next) {
    // In this section validate the headers of the request (demo headers)
    const authorizationHeader = req.headers['authorization']
    if (typeof authorizationHeader !== 'undefined') {
        next()  // Next block of code
    } else {
        res.sendStatus(401) // Unauthorized status
    }
}


app.use(bodyParser.json())  // for parsing application/json
app.use(cors())


app.get('/', verifyToken, function (req, res) {
    res.send("API Working")
})

app.post('/login', verifyToken, function (req, res) {
    let body = req.body
    let respJSON
    console.log(body);
    respJSON = {
        status: "ok",
        description: "Query peformed correctly."
    }
    res.json(respJSON)
})

app.listen(port)
//server.listen(8888)
console.log('API restful server started on: ' + port)