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
    yield call(reporter, "incrementing")
    yield put(actions.incrementCounterComplete(1) )
  }
}

export function* watchDecrement() {
  while(true) {
    yield take(actions.DECREMENT_COUNTER)
    yield call(reporter, "decrementing")
    yield put(actions.decrementCounterComplete() )
  }
}


export default function* rootSaga(getState) {
  yield [
    fork(watchIncrement, getState),
    fork(watchDecrement)
  ]
}