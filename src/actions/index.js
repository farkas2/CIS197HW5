export const UPDATE_BIO = 'UPDATE_BIO'
export const TOGGLE_SHOW_EDIT_BIO = 'TOGGLE_SHOW_EDIT_BIO'
export const ADD_BLOG_POST = 'ADD_BLOG_POST'
export const EDIT_BLOG_POST = 'EDIT_BLOG_POST'
export const DELETE_BLOG_POST = 'DELETE_BLOG_POST'
export const TOGGLE_SHOW_ADD_POST = 'TOGGLE_SHOW_ADD_POST'
export const TOGGLE_EDIT_CLICKED_POST = 'TOGGLE_EDIT_CLICKED_POST'

let id = 1

export const updateBio = (imageToUpdate, description) => ({
  type: UPDATE_BIO,
  image: imageToUpdate,
  bio: description,
})

// needs no status or argument. Just flips the boolean in the store
export const setEditClickedStatus = () => ({
  type: TOGGLE_SHOW_EDIT_BIO,
})

export const setAddClickedStatus = () => ({
  type: TOGGLE_SHOW_ADD_POST,
})

export const addBlogPost = (titleText, imageLink, descriptionText) => ({
  type: ADD_BLOG_POST,
  id: id++,
  title: titleText,
  image: imageLink,
  description: descriptionText,
  deleted: false,
  editClicked: false,
})

export const toggleEditClickedPost = idNum => ({
  type: TOGGLE_EDIT_CLICKED_POST,
  editClicked: true,
  id: idNum,
})

export const editBlogPost = (titleText, imageLink, descriptionText, idNum) => ({
  type: EDIT_BLOG_POST,
  title: titleText,
  image: imageLink,
  description: descriptionText,
  id: idNum,
  deleted: false,
  editClicked: false,
})

export const deleteBlogPost = idNum => ({
  type: DELETE_BLOG_POST,
  id: idNum,
  // title: titleText,
  // image: imageLink,
  // description: descriptionText,
  // id: idNum,
  deleted: true,
})
