const r = require('rethinkdb')
const io = require('socket.io-client')

import { tester } from './saga-io'

// createListener('tester')
// r.connect({ host: '107.170.201.130', port: '28015', db: 'metacog' })

// module.exports = {
//   shuffleSkus(io, count) {
//     const skus = r
//       .table('item')
//       .sample(100)
//       ('sku')
//       .run()
//       .then(results => {
//         // console.log("queries.index.shuffleSkus() results", results)
//         io.emit('query-saga-test-results', results)
//         io.emit('query-results', results)
//         return results
//       }
//     )
//   }
// }

