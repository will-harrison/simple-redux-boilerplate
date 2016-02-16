import * as actions from './ShuffleActions'

const state = {
  skus: [],
  count: 100
}

export default function shuffle(state = initialState, action) {
  switch (action.type) {
    case actions.SHUFFLE_REQUEST:
      return
        { ...state,
          count: action.count
        }
    case actions.SHUFFLE_COMPLETE:
      return
        { ...state,
          skus: action.skus
        }
    default:
      return { ...state }
  }
}