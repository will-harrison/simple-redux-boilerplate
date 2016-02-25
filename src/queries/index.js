const socketio = require('socket.io')
const r = require('rethinkdbdash')({ servers: [{ host: '107.170.201.130', port: '28015', db: 'metacog' }]})


module.exports = {
  shuffleSkus(io, count, socket) {
    const skus = r
      .table('item')
      .sample(100)
      ('sku')
      .run()
      .then(results => {
        // TODO WH: prob io.emit
        io.emit('query-results', results)
        return results
      }
    )
  }
}



