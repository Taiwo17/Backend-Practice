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
  res.end('Sending all the promotion to you, choose anyone out of it')
})

router.post('/', (req, res) => {
  const promoName = req.body.promoName
  const promoDesc = req.body.promoDesc
  res.end(`Am sending the ${promoName} and the ${promoDesc} to you right now`)
})

router.put('/:promoId', (req, res) => {
  res.statusCode = 403
  res.end('PUT operation cant be performed here broski')
})

router.delete('/', (req, res) => {
  res.end(`Deleting the promotion details`)
})

router.get('/:promoId', (req, res) => {
  const promoId = req.params.promoId
  res.end(`This is the route to ${promoId}`)
})

router.delete('/:promoId', (req, res) => {
  let promoId = req.params.promoId
  res.end(`The ${promoId} has been deleted`)
})

module.exports = router
