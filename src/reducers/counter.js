import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

const initialState = {
  count: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return { ...state, count };
  case DECREMENT_COUNTER:
    return { ...state, count };
  default:
    return { ...state };
  }
}
