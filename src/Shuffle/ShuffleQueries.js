import { take, put, call, fork } from 'redux-saga'
import IO from 'socket.io-client'

// making queries out of sagas!

const SHUFFLE_SKUS = 'shuffleSkus'

const socket = IO()
socket.on('hi', () => console.log("hello from the server"))
socket.on('hi-again', () => console.log("hello again"))

socket.on('query-results', (results) => {
  shuffleComplete(results)
})

function* shuffleComplete() {
  console.log("shuffleComplete called")
  yield put({ type: 'SHUFFLE_COMPLETE', results })
}

export function* shuffleSkus(count) {
  console.log("shuffleSkus called")
  socket.emit('query', SHUFFLE_SKUS, { count } )

}
