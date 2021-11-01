import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { editBlogPost, deleteBlogPost, toggleEditClickedPost } from '../actions'

const blogPostCard = props => {
  const {
    thisPostID, posts, markPostAsEditClicked, editBlogPostInner, deleteBlogPostInner,
  } = props
  const post = posts.find(x => x.id === thisPostID)

  const [editTitle, setTitle] = useState(post.title)
  const [editImgUrl, setImgUrl] = useState(post.image)
  const [editDescription, setDescription] = useState(post.description)

  if (!post.editClicked) {
    // add buttons to edit or delete post
    return (
      <>
        <div>
          <img
            src={post.image}
            alt=""
            style={{ height: 200, width: 200 }}
          />
        </div>
        <div>
          <b>
            Post Number
            {' '}
            {post.id}
            :
            {' '}
            {post.title}
          </b>
        </div>
        <div>
          Description:
          {post.description}
        </div>
        <div>
          <Button
            type="button"
            onClick={() => {
              markPostAsEditClicked(post.id)
            }}
          >
            Edit Post!
          </Button>
        </div>
      </>
    )
  }
  return (
    <>
      <div>
        Enter Title:
        <div>
          <input type="textarea" value={editTitle} onChange={e => setTitle(e.target.value)} />
        </div>
      </div>
      <div>
        Enter Image URL:
        <div>
          <input type="textarea" value={editImgUrl} onChange={e => setImgUrl(e.target.value)} />
        </div>
      </div>
      <div>
        Enter Description:
        <div>
          <input type="textarea" value={editDescription} onChange={e => setDescription(e.target.value)} />
        </div>
      </div>

      <div>
        <Button
          type="button"
          onClick={() => {
            // console.log('cals being sent to editBlogPost: ' +  editTitle + editImgUrl + editDescription + post.id)
            editBlogPostInner(editTitle, editImgUrl, editDescription, post.id)
          }}
        >
          Save!
        </Button>
        <Button
          type="button"
          onClick={() => {
            // console.log('cals being sent to editBlogPost: ' +  editTitle + editImgUrl + editDescription + post.id)
            editBlogPostInner(post.title, post.image, post.description, post.id)
          }}
        >
          Cancel!
        </Button>
        <Button
          type="button"
          onClick={() => {
            deleteBlogPostInner(post.id)
          }}
        >
          Delete!
        </Button>
      </div>

    </>
  )
}

const mapDispatchToProps = dispatch => ({
  editBlogPostInner: (titleText, imageURL, descriptionText, idNum) => dispatch(editBlogPost(titleText, imageURL, descriptionText, idNum)),
  deleteBlogPostInner: idNum => dispatch(deleteBlogPost(idNum)),
  markPostAsEditClicked: tempID => dispatch(toggleEditClickedPost(tempID)),
})
const mapStateToProps = (state, ownProps) => ({
  thisPostID: ownProps.id,
  posts: state.blogPosts,
})
export default connect(mapStateToProps, mapDispatchToProps)(blogPostCard)
