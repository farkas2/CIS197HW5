import { TOGGLE_SHOW_EDIT_BIO } from '../actions'

const default_state = false

const editClickedStatusReducer = (state = default_state, action) => {
  const { type } = action

  switch (type) {
    case TOGGLE_SHOW_EDIT_BIO:
      return !state
    default:
      return state
  }
}

export default editClickedStatusReducer
