import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_COMPLETE } from './CountActions';

const initialState = {
  count: 3,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER_COMPLETE:
      return { ...state, CountReducer }
    case INCREMENT_COUNTER:
    case DECREMENT_COUNTER:
    default:
      return { ...state };
  }
}
