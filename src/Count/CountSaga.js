import { take, put, call, fork } from 'redux-saga'
import * as actions from './CountActions'


export function* reporter(val) {
  console.log("SAGA IS ", val);
}

// import * as CountSaga from '../Count/CountSaga'
export function* watchIncrement(getState) {
  while(true) {
    yield take(actions.INCREMENT_COUNTER)
    const countIncremented = getState().CountReducer.count + 1
    yield put({ type: actions.INCREMENT_COUNTER_COMPLETE, count: countIncremented })
  }
}

export function* watchDecrement(getState) {
  while(true) {
    yield take(actions.DECREMENT_COUNTER)
    const countDecremented = getState().CountReducer.count - 1
    yield put({ type: actions.DECREMENT_COUNTER_COMPLETE, count: countDecremented })
  }
}


export default function* rootSaga(getState) {
  yield [
    fork(watchIncrement, getState),
    fork(watchDecrement, getState)
  ]
}