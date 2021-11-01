import { TOGGLE_SHOW_ADD_POST } from '../actions'

const default_state = false

const addClickedStatusReducer = (state = default_state, action) => {
  const { type } = action

  switch (type) {
    case TOGGLE_SHOW_ADD_POST:
      return !state
    default:
      return state
  }
}

export default addClickedStatusReducer
