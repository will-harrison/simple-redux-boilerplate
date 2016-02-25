const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
// const rdb = require('rethinkdbdash')({ servers: [{ host: '107.170.201.130', port: '28015', db: 'metacog' }]})
const socketio = require('socket.io')

const app = express()
const compiler = webpack(config)

//
const queries = require('./src/queries')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const io = socketio.listen(
  app.listen(5001, 'localhost', (err) => {
    if (err) {
      console.log(err)
      return
    }

    console.log('Listening at http://localhost:5001')
  })
)

io.sockets.on('connection', (socket) => {
  console.log("socket ", socket.id, "connected")

  socket.on('query', (io, query, count) => {
    console.log("socket", socket.id, query, count, "called 'query'")
    queries[query(socket, count)]
    // call a specific function (query), passing any args (count
    // no need for call back? can make it unidirectional?

  })

  socket.on('disconnect', () => {
    console.log("socket", socket.id, "has disconnected")
  })
})