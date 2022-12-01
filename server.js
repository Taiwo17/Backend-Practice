import express from 'express'
import http from 'http'
const morgan = require('morgan')

const dishesRoute = require('./routes/dishRouter')
const promoRoute = require('./routes/promoRouter')

const hostname = 'localhost'
const port = 4000

const app = express()

app.use(morgan('dev')) // Used in loggin the response of the server
app.use(express.urlencoded({ extended: false })) // Used for the body parser in the body
app.use(express.static(__dirname + '/public')) // Used in reading the static files
app.use(express.json()) // Used in parsing the data in json format to the client side

// app.use((req, res, next) => {
//     console.log(req.headers)
//   res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//   res.send(
//     '<html><body><h1>This is the home page for Oluwakemi</h1></body></html>'
//   )
//   next()
// })

// The usage of the app

// app.use('/dishes', dishRouter)
app.use('/', dishesRoute)
app.use('/promotion', promoRoute)

// Setting up the REST API
/*app.all('/dishes', (req, res, next) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  next()
})

app.get('/dishes', (req, res, next) => {
  res.send('Will send all the dishes to you!')
})

app.post('/dishes', (req, res, next) => {
  res.send(
    'Will add the dish: ' +
      req.body.name +
      ' with details: ' +
      req.body.description
  )
})

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403
  res.send('PUT operation not supported on /dishes')
})

app.delete('/dishes', (req, res, next) => {
  res.send('Deleting all dishes')
})

app.get('/dishes/:dishId', (req, res, next) => {
  res.send('Will send details of the dish: ' + req.params.dishId + ' to you!')
})

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403
  res.send('POST operation not supported on /dishes/' + req.params.dishId)
})

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n')
  res.send(
    'Will update the dish: ' +
      req.body.name +
      ' with details: ' +
      req.body.description
  )
})

app.delete('/dishes/:dishId', (req, res, next) => {
  res.send('Deleting dish: ' + req.params.dishId)
})

*/

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}/${port}`)
  process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})
