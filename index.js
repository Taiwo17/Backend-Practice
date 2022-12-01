import express from 'express'
import http from 'http'
const morgan = require('morgan')

const dishesRoute = require('./routes/dishRouter')
const promoRoute = require('./routes/promoRouter')
const leaderRoute = require('./routes/leaderRouter')

const hostname = 'localhost'
const port = 4000

const app = express()

app.use(morgan('dev')) // Used in loggin the response of the server
app.use(express.urlencoded({ extended: false })) // Used for the body parser in the body
app.use(express.static(__dirname + '/public')) // Used in reading the static files
app.use(express.json()) // Used in parsing the data in json format to the client side

app.use('/', dishesRoute)
app.use('/promotion', promoRoute)
app.use('/leaders', leaderRoute)

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}/${port}`)
  process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})
