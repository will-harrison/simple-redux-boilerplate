const socketio = require('socket.io')
const r = require('rethinkdbdash')({ servers: [{ host: '107.170.201.130', port: '28015', db: 'metacog' }]})

function shuffleSkus(count, socket) {
  const skus = r
    .table('item')
    .sample(100)
    ('sku')
    .run()
    .then(results => {
      socket.emit('query-results', results)
      return results
    })
}

const query = shuffleSkus

