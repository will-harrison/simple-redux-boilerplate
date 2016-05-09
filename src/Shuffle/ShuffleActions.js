import { SHUFFLE_REQUEST, SHUFFLE_COMPLETE } from './ShuffleActions'

export function shuffleRequest( count=100 ) {
  return {
    type: SHUFFLE_REQUEST,
    count
  }
}

export function shuffleComplete(skus) {
  return {
    type: SHUFFLE_COMPLETE,
    skus
  }
}