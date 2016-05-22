import { take, put } from 'redux-saga'
import io from 'socket.io-client'
import Promise from 'bluebird'

function createListener(blah) {
  const socket = io('http://localhost:5001/')
  let deferred
  socket.on('fsa', fsa => {
    deferred.resolve(JSON.parse(fsa))
    deferred = null
  })

  return {
    nextMessage() {
      if ( ! deferred ) {
        deferred = {}
        deferred.promise =
          new Promise(resolve => deferred.resolve = resolve)
      }
      return deferred.promise
    }
  }
}



export const tester = createListener('blah')