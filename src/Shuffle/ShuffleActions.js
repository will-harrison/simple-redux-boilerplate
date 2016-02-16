export const SHUFFLE_REQUEST = 'SHUFFLE_REQUEST'
export const SHUFFLE_COMPLETE = 'SHUFFLE_COMPLETE'

export function shuffleRequest( count=100 ) {
  type: SHUFFLE_REQUEST,
  count
}

export function shuffleComplete(skus) {
  type: SHUFFLE_COMPLETE,
  skus
}