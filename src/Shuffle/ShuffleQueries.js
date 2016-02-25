import { take, put, call, fork } from 'redux-saga'
import IO from 'socket.io-client'

// making queries out of sagas!

export const socket = IO()
socket.on('hi', () => console.log("hello from the server"))

export function* shuffleSkus(count) {
  const skus = yield (socket.emit('query', count,
    function shuffleSkus(io, count, socket) {
      const skus = r
        .table('item')
        .sample(100)
        ('sku')
        .run()
        .then(results => {
          // TODO WH: prob io.emit
          io.emit('query-results', results)
          console.log(results)
          return results
        }
      )
    }
  ))
}
