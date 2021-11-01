import { UPDATE_BIO } from '../actions'

const default_state = { image: '', description: '' }

const BioReducer = (state = default_state, action) => {
  // console.log(action)
  const { type, image, bio } = action

  switch (type) {
    case UPDATE_BIO:
      return { image: action.image, description: bio }
    default:
      return state
  }
}

export default BioReducer
