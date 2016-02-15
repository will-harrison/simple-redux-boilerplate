import { take, put, call, fork } from 'redux-saga'
import * as actions from './CountActions'


function* increment() {
  console.log("incrementing?");
  while (true) {
    yield take( actions.INCREMENT_COUNTER )
    // yield put( actions.INCREMENT_COUNTER_COMPLETE, count )
  }
}

function* decrement() {
  yield put({ type: actions.DECREMENT_COUNTER, count })
}


export default function* rootSaga() {
  console.log("rootSaga starting");
  yield fork(increment)
  // yield fork(decrement)
}
const sagas = [ rootSaga ]

export default sagas