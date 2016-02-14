import { take, put, call, fork } from 'redux-saga'

import * as CountSaga from '../Count/CountSaga'

const sagas = [ CountSaga ]

export default sagas