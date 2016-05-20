require('babel-core/register')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
// const rdb = require('rethinkdbdash')({ servers: [{ host: '107.170.201.130', port: '28015', db: 'metacog' }]})
const socketio = require('socket.io')

const app = express()
const compiler = webpack(config)

//
const api = require('./src/api')

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
  // fsa: Flux Standard Action, https://github.com/acdlite/flux-standard-action
  var fsa = {type: 'SERVER_CONNECT', payload: {socket: socket.id}}
  socket.emit('fsa', fsa)

  var deferred

  socket.on('query-saga-test-results', (results) => {
    console.log('query-saga-test-results called', results)
    if ( deferred ) {
      console.log('query-saga-test-results is deferred')
      deferred.resolve(JSON.parse(results.data))
      deferred = null
    }
    return {
      nextMessage() {
        if ( ! deferred ) {
          console.log('query-saga-test-results is deferred')
          deferred = {}
          deferred.promise = new Promise( resolve => deferred.resolve = resolve )
        }
        return deferred.promise
      }
    }
  })

  socket.on('query-results', (results) => {
    console.log("devServer.socket.on('query-results')", results)
  })


  socket.on('query', (query, args) => {
    console.log("devServer.socket.on('query')")
    api[query](io, args)
    // io.emit('query-results', api[query](socket, args), 'blah')
    // io.emit('query-results', results , 'blah' )
    // call a specific function (query), passing any args (args
    // no need for call back? can make it unidirectional?

  })


  console.log("socket ", socket.id, "connected")

  socket.on('disconnect', () => {
    console.log("socket", socket.id, "has disconnected")
  })
})