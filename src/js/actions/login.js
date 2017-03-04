import * as types from '../constants/ActionTypes'

export function submitToken(token) {
  return {
    type: types.SUBMIT_TOKEN,
    token
  }
}
