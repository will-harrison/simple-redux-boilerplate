import { take, put, call, fork } from 'redux-saga'
import IO from 'socket.io-client'

// making queries out of sagas!

export const SHUFFLE_REQUEST = 'SHUFFLE_REQUEST'
export const SHUFFLE_COMPLETE = 'SHUFFLE_COMPLETE'

export function shuffleSkus(io, count) {
  const skus = r
    .table('item')
    .sample(100)
    ('sku')
    .run()
    .then(results => {
      // console.log("queries.index.shuffleSkus() results", results)
      io.emit('query-saga-test-results', results)
      io.emit('query-results', results)
      return results
    }
  )
}




const SHUFFLE_SKUS = 'shuffleSkus'


export function* shuffleSkus(count) {
  console.log("shuffleSkus called")
  socket.emit('query', SHUFFLE_SKUS, { count } )

}


const socket = IO()
socket.on('hi', () => console.log("hello from the server"))
socket.on('hi-again', () => console.log("hello again"))

socket.on('query-results', (results) => {
  function* shuffleComplete(results) {
    console.log("shuffleComplete called")
    yield put({ type: 'SHUFFLE_COMPLETE', results })
  }
  shuffleComplete(results)
  console.log("ShuffleQueries.socket.on('query-results')");
})

