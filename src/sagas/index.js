// import CountSaga from '../Count/CountSaga'

import { take, put, call, fork } from 'redux-saga'
import * as actions from '../Count/CountActions'

function* reporter(val) {
  console.log("incrementing coutner through saga", val);
}

// import * as CountSaga from '../Count/CountSaga'
export default function* CountSaga() {
  while(true) {
    const increment = yield take(actions.INCREMENT_COUNTER)
    yield call(reporter("listening"))
    try {
      yield put(actions.INCREMENT_COUNTER_COMPLETE)
    }
    catch(err) {
      yield call(reporter(err))
    }
  }
}


