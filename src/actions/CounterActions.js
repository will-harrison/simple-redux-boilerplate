const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const INCREMENT_COUNTER_COMPLETE = 'INCREMENT_COUNTER_COMPLETE'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  }
}

export function incrementCounterComplete(count) {
  return {
    type: INCREMENT_COUNTER_COMPLETE,
    CountReducer.count + 1
  }
}