import { SUBMIT_TOKEN } from '../constants/ActionTypes'

export default function name(state='', action) {
  switch(action.type){
    case SUBMIT_TOKEN:
     return action.token;
    default:
      return state;
  }
}