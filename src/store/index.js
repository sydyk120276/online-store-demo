import { combineReducers, createStore } from 'redux'
import { reduser } from './reduser'

const rootReduser = combineReducers({
  likes: reduser
})

export const store = createStore(rootReduser)