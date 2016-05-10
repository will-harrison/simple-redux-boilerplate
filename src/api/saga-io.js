import io from 'socket.io-client'

import { SHUFFLE_REQUEST, SHUFFLE_COMPLETE, SHUFFLE_SKUS } as blah from './src/Shuffle/ShuffleAPI'



let socket = null

export const init = store => {
  socket = io()

  socket.on('disconnect', () => {
    console.warn('Server disconnected')
    store.dispatch({ type: LEAVE_SESSION })
  })

  const actions = [ SHUFFLE_REQUEST, SHUFFLE_SKUS ]

  actions.forEach(action => {
    socket.on(action, payload => {
      store.dispatch({ type: action, payload })
    })
  })
}

export const socketIOMiddleware = store => next => action => {
  const result = next(action)

  const actions =[ SHUFFLE_COMPLETE ]

  if (actions.indexOf(action.type) > -1) {
    const state = store.getState()
    const sessionId = state.session.id
    socket.emit(action.type, {
      sessionId,
      payload: action.payload
    })
  }
  return result
}