import { take, put, call, fork } from 'redux-saga'
import * as actions from '../constants/ActionTypes'

console.log(actions.INCREMENT_COUNTER);

function* increment() {
  while (true) {
    yield take( actions.INCREMENT_COUNTER )
    // get count
    let count = getState()
    // increment
    yield put({ type: INCREMENT_COUNTER_COMPLETE, count })
  }
}

function* decrement() {
  yield put({ type: DECREMENT_COUNTER, count })
}


export default function* rootSaga() {
  yield fork(increment)
  // yield fork(decrement)
}