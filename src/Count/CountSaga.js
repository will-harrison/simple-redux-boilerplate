import { take, put, call, fork } from 'redux-saga'
import * as actions from './CountActions'

console.log(actions.INCREMENT_COUNTER);

function* increment() {
  while (true) {
    yield take( actions.INCREMENT_COUNTER )
    yield call(console.log("incrementing"))
    yield put( actions.INCREMENT_COUNTER_COMPLETE )
  }
}

function* decrement() {
  yield put({ type: DECREMENT_COUNTER, count })
}


export default function* rootSaga() {
  yield fork(increment)
  // yield fork(decrement)
}