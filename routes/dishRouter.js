const express = require('express')

const app = express()

const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

router.all('/', (req, res, next) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  next()
})

router.get('/dishes', (req, res) => {
  res.end('Sending all the dishes to you, choose anyone out of it')
})

router.post('/dishes', (req, res) => {
  const name = req.body.name
  const desc = req.body.desc
  res.end(`Am sendind the ${name} and the ${desc} to you right now`)
})

router.put('/dishes', (req, res) => {
  res.statusCode = 403
  res.end('PUT operation cant be performed here broski')
})

router.delete('/dishes', (req, res) => {
  res.end('Deleting the file you requested for to be deleted!... Thanks broski')
})

router.get('/dishes/:dishId', (req, res) => {
  const dishId = req.params.dishId
  res.end(`This is the route  for ${dishId} details`)
})

router.post('/dishes/:dishId', (req, res) => {
  res.statusCode = 403
  res.end('PUT operation cant be perfomed on this routes')
})

router.put('/dishes/:dishId', (req, res) => {
  let dishId = req.params.dishId
  res.end(
    `The server will update the id with ${dishId}, ${req.body.name} and the ${req.body.desc}`
  )
})

router.delete('/dishes/:dishId', (req, res) => {
  let dishId = req.params.dishId
  res.end(`Deleting the requested ${dishId}`)
})

module.exports = router
