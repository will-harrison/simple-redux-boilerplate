// import CountSaga from '../Count/CountSaga'

import { take, put, call, fork } from 'redux-saga'
import * as actions from '../Count/CountActions'

export function* reporter(val) {
  console.log("SAGA IS ", val);
}

// import * as CountSaga from '../Count/CountSaga'
export function* watchIncrement(getState) {
  while(true) {
    const { counter } = yield take(actions.INCREMENT_COUNTER)
    // yield put({ type: actions.INCREMENT_COUNTER_SUCCESS,  1 })
    yield call(reporter, "incrementing")
  }
}

export function* watchDecrement() {
  while(true) {
    yield take(actions.DECREMENT_COUNTER)
    yield call(reporter, "decrementing")
  }
}


export default function* rootSaga(getState) {
  yield [
    fork(watchIncrement, getState),
    fork(watchDecrement)
  ]
}