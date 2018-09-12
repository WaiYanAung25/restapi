const express = require('express')
const app = express()
const port=3000
 
const routes = require('./app/routes')(app)

app.listen(port,x)
function x(){
    console.log('we are running on' + port)
}
