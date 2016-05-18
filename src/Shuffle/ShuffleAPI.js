import { take, put, call, fork } from 'redux-saga'
import IO from 'socket.io-client'

const SHUFFLE_REQUEST = 'SHUFFLE_REQUEST'
const SHUFFLE_COMPLETE = 'SHUFFLE_COMPLETE'
const SHUFFLE_SKUS = 'SHUFFLE_SKUS'

export const listenerActions = [ SHUFFLE_REQUEST, SHUFFLE_SKUS ]
export const emitterActions = [ SHUFFLE_COMPLETE ]


export function shuffleSkusQuery(count) {
  const skus = r
    .table('item')
    .sample(100)
    ('sku')
    .run()
    .then(results => {
      return results
    }
  )
}

export function* shuffleSkus(count=100) {
  console.log("shuffleSkus called")
  socket.emit('query', shuffleSkusQuery(count), { count } )
}
