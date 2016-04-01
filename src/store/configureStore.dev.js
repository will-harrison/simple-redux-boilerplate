import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger'
import sagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
// import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger({
  // SAGAs are mouthy and spit out a lot of EFFECT_TRIGGERED and EFFECT_RESOLVED
  predicate: (getState, action) => action.type.indexOf('EFFECT_') === -1,
  collapsed: true
});

// const finalCreateStore = compose(applyMiddleware(
//   // sagaMiddleware(...sagas),
//   DevTools.instrument()
// ))(createStore)


const finalCreateStore = compose(
  // Middleware you want to use in development:
    applyMiddleware(
      sagaMiddleware(...rootSaga),
      logger,
    ),
  // Required! Enable Redux DevTools with the monitors you chose
  // DevTools.instrument(),
  window.devToolsExtension ? window.devToolsExtension([{actionsBlackList: ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED']}]) : f => f
)(createStore);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};
