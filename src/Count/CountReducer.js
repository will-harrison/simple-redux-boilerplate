import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_COMPLETE, DECREMENT_COUNTER_COMPLETE } from './CountActions';

const initialState = {
  count: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER_COMPLETE:
      return { ...state,
        count: action.count }
    case DECREMENT_COUNTER_COMPLETE:
      return { ...state,
        count: action.count }
    case INCREMENT_COUNTER:
    case DECREMENT_COUNTER:
    default:
      return { ...state };
  }
}
