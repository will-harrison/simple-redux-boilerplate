import CountSaga from '../Count/CountSaga'
import ShuffleSaga from '../Shuffle/ShuffleSaga'

const rootSaga = [ CountSaga, ShuffleSaga ]

export default rootSaga

// import { take, put, call, fork } from 'redux-saga'
// import * as actions from '../Count/CountActions'

// export function* reporter(val) {
//   console.log("SAGA IS ", val);
// }

// // import * as CountSaga from '../Count/CountSaga'
// export function* watchIncrement(getState) {
//   while(true) {
//     const { counter } = yield take(actions.INCREMENT_COUNTER)
//     yield call(reporter, "incrementing")
//     // figure out current state and add 1
//     // how hard can it be?
//     const countIncremented = getState().CountReducer.count + 1
//     yield put({ type: actions.INCREMENT_COUNTER_COMPLETE, count: countIncremented })
//   }
// }

// export function* watchDecrement(getState) {
//   while(true) {
//     yield take(actions.DECREMENT_COUNTER)
//     yield call(reporter, "decrementing")
//     const countDecremented = getState().CountReducer.count - 1
//     yield put({ type: actions.DECREMENT_COUNTER_COMPLETE, count: countDecremented })
//   }
// }


// export default function* rootSaga(getState) {
//   yield [
//     fork(watchIncrement, getState),
//     fork(watchDecrement, getState)
//   ]
// }