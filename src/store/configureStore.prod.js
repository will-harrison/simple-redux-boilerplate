import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import thunk from 'redux-thunk'

const finalCreateStore = compose(
  applyMiddleware(thunk, sagaMiddleware(rootSaga))
)(createStore)

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
