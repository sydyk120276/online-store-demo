import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import likeReduser from './likeReduser.js'
import auth from './auth.js'

const rootReduser = combineReducers({
  likes: likeReduser,
  auth,
})

export const store = createStore(rootReduser, applyMiddleware(thunk))