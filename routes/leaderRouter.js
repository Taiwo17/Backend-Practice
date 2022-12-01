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

router.get('/', (req, res) => {
  res.end('Sending all the leadertion to you, choose anyone out of it')
})

router.post('/', (req, res) => {
  const leaderName = req.body.leaderName
  const leaderDesc = req.body.leaderDesc
  res.end(`Am sending the ${leaderName} and the ${leaderDesc} to you right now`)
})

router.put('/:leaderId', (req, res) => {
  res.statusCode = 403
  res.end('PUT operation cant be performed here broski')
})

router.delete('/', (req, res) => {
  res.end(`Deleting the leadertion details`)
})

router.get('/:leaderId', (req, res) => {
  const leaderId = req.params.leaderId
  res.end(`This is the route to ${leaderId}`)
})

router.delete('/:leaderId', (req, res) => {
  let leaderId = req.params.leaderId
  res.end(`The ${leaderId} has been deleted`)
})

module.exports = router
