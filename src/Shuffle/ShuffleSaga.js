import { take, put, call, fork } from 'redux-saga'
import * as actions from './ShuffleActions'
import { SHUFFLE_REQUEST, SHUFFLE_COMPLETE } from './ShuffleAPI'

export function* reporter(val) {
  console.log("SAGA IS ", val);
}

export function* watchShuffleRequest(getState) {
  while (true) {
    yield take(actions.SHUFFLE_REQUEST)
    yield call( api.shuffleSkus, getState().ShuffleReducer.count )
  }
}



export default function* rootSaga(getState) {
  yield [
    fork(watchShuffleRequest, getState),
    // fork(watchShuffleComplete, getState)
  ]
}