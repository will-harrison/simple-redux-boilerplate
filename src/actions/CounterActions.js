import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes'

export function increment(count) {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function decrement(count) {
  return {
    type: DECREMENT_COUNTER,
  }
}

export function incrementCounterComplete(count) {
  return {
    type: INCREMENT_COUNTER_COMPLETE,
    count
  }
}