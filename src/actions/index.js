import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_COMPLETE } from '../constants/ActionTypes'

export function increment(count) {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function increment_complete(count) {
  return {
    type: INCREMENT_COUNTER_COMPLETE,
    count
  }
}

export function decrement(count) {
  return {
    type: DECREMENT_COUNTER,
  }
}
