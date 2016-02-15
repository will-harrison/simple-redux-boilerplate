import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_COMPLETE, DECCREMENT_COUNTER_COMPLETE } from './CountActions';

const initialState = {
  count: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER_COMPLETE:
      return { ...state,
        count: state.count + 1 }
    case DECCREMENT_COUNTER_COMPLETE:
      return { ...state,
        count: state.count - 1 }
    case INCREMENT_COUNTER:
    case DECREMENT_COUNTER:
    default:
      return { ...state };
  }
}
