import { take, put, call, fork } from 'redux-saga'
import * as actions from './ShuffleActions'
import * as queries from './ShuffleQueries'

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