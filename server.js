import express from 'express'
import http from 'http'

const hostname = 'localhost'
const port = 4000

const app = express()

app.use((req, res, next) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.send(
    '<html><body><h1>This is the home page for Oluwakemi</h1></body></html>'
  )
  next()
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}/${port}`)
})
