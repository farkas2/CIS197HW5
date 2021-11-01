import { combineReducers } from 'redux'

import bio from './bio'
import editClickedStatus from './editClickedStatus'
import blogPosts from './blogPosts'
import addClickedStatus from './addClickedStatus'

export default combineReducers({
// here we list any reducers
  bio,
  editClickedStatus,
  addClickedStatus,
  blogPosts,
})
