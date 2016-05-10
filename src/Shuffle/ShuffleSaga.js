import { take, put, call, fork } from 'redux-saga'
import * as actions from './ShuffleActions'
import { SHUFFLE_REQUEST, SHUFFLE_COMPLETE } from './ShuffleAPI'

import IO from 'socket.io-client'
export const socket = IO()

export function* reporter(val) {
  console.log("SAGA IS ", val);
}

export function* watchShuffleRequest(getState) {
  while (true) {
    yield take(actions.SHUFFLE_REQUEST)
    yield call( queries.shuffleSkus, getState().ShuffleReducer.count )
  }
}



export default function* rootSaga(getState) {
  yield [
    fork(watchShuffleRequest, getState),
    // fork(watchShuffleComplete, getState)
  ]
}