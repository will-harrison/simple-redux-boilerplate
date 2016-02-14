import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_COMPLETE } from '../constants/ActionTypes'

const initialState = {
  count: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return {
      ...state
    }
  case INCREMENT_COUNTER_COMPLETE:
    return {
      ...state,
      count
    }
  case DECREMENT_COUNTER:
    return {
      ...state
    }
  default:
    return {
      ...state
    }
  }
}
