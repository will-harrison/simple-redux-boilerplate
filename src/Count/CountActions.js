export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const INCREMENT_COUNTER_COMPLETE = 'INCREMENT_COUNTER_COMPLETE'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function incrementCounterComplete(count) {
  return {
    type: INCREMENT_COUNTER_COMPLETE,
    count
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  }
}
