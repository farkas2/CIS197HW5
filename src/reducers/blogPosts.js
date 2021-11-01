import {
  ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, TOGGLE_EDIT_CLICKED_POST,
} from '../actions'

const default_state = []

const blogPostsReducer = (state = default_state, action) => {
  const {
    type, id, image, description, title, deleted, editClicked,
  } = action

  switch (type) {
    case ADD_BLOG_POST:
      return [...state, {
        title, id, image, description, deleted, editClicked,
      }]
    case EDIT_BLOG_POST:
      // console.log(action)
      return state.map(blogPost => {
        if (blogPost.id === action.id) {
          // console.log('returning withing EDIT_BLOG_POST reducer')
          return {
            ...blogPost, image: action.image, title: action.title, description: action.description, id: action.id, editClicked: false,
          }
        }
        return blogPost
      })
    case DELETE_BLOG_POST:
      return state.map(blogPost => {
        if (blogPost.id === action.id) {
          return {
            ...blogPost, deleted: true,
          }
        }
        return blogPost
      })
    case TOGGLE_EDIT_CLICKED_POST:
      return state.map(blogPost => {
        if (blogPost.id === action.id) {
          return {
            ...blogPost, editClicked: true,
          }
        }
        return blogPost
      })
    default:
      return state
  }
}
export default blogPostsReducer
