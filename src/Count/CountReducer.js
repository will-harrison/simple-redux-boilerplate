import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './CountActions';

const initialState = {
  count: 0,
}

export default function counter(state = initialState, action) {
  console.log("state", state);
  switch (action.type) {
    case INCREMENT_COUNTER_COMPLETE:
      return { ...state, count }
    case INCREMENT_COUNTER:
    case DECREMENT_COUNTER:
    default:
      return { ...state };
  }
}
