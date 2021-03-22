const express = require("express")
const bodyParser = require("body-parser")
const HttpStatus = require("http-status-codes")

const app = express()


const users = []

app.use(bodyParser.json())

app.get("/", function(request, response) {
    console.log("Made a request to /")
    response.send({
        "message": "Hello There."
    }) 
})

app.post("/", function(request, response) {
    const body = request.body
    console.log("This is the body: ", body)
    users.push(body)
    console.log("These are the users: ", users)
    response.status(HttpStatus.OK).send(body)
})

app.get("/users", function(request, response) {
    console.log("Made a request to /users")
    response.send(users) 
})





const PORT = 8086



function onServerStart() {
    console.log("Starting server on port ", PORT)
}


app.listen(PORT, onServerStart)