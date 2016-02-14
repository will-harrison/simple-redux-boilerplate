import { take, put, call, fork } from 'redux-saga'
import * as actions from '../constants/ActionTypes'

console.log(actions.INCREMENT_COUNTER);

function* increment(getState) {
  while (true) {
    yield take( actions.INCREMENT_COUNTER )
    let countUp = getState().count + 1
    yield put({ type: INCREMENT_COUNTER_COMPLETE, countUp })
  }
}

function* decrement() {
  yield put({ type: DECREMENT_COUNTER, count })
}


export default function* rootSaga(getState) {
  yield fork(increment, getState)
  // yield fork(decrement)
}