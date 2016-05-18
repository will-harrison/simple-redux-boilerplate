// const io = require('socket.io')
const r = require('rethinkdb')

r.connect({ host: '107.170.201.130', port: '28015', db: 'metacog' })

import { listenerActions, emitterActions } from '../Shuffle/ShuffleAPI'
// import { listenerActions, emitterActions } from './Shuffle/ShuffleAPI'
export { listenerActions }
// export const emitterActions

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

