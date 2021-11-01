import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import PostCard from './blogPostCard'

import {
  addBlogPost, editBlogPost, deleteBlogPost, setAddClickedStatus,
} from '../actions'

const filterPosts = posts => (
  posts.filter(post => !post.deleted)
)

let ctr = 0

const blogPosts = props => {
  // const posts = props.blogPosts
  // const addPost = props.addBlogPost
  // const clickStatus = props.addClickedStatus
  const {
    blogPostsInner, addClickedStatus, addBlogPostInner, dispatchSetAddClickedStatusInner,
  } = props
  const [postUrl, setPostUrl] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const [postTitle, setPostTitle] = useState('')

  // console.log(blogPostsInner)
  // console.log(addClickedStatus)
  // console.log(posts)
  // TO:DO the populated blogCards will be appeneded below here
  // hooks for image input,
  // console.log('Non-deleted posts')
  // console.log(filterPosts(blogPostsInner))
  if (!addClickedStatus) {
    ctr++
    return (
      <>
        <div
          style={
                {
                  border: '2px solid black',
                  width: '300px',
                }
                }
        >
          <div>
            <h1> Blog Posts </h1>
            <Button
              type="button"
              onClick={() => {
                ctr++
                dispatchSetAddClickedStatusInner(!addClickedStatus)
              }}
            >
              Add Post!
            </Button>
          </div>
        </div>
        <div key={ctr}>
          {filterPosts(blogPostsInner).map(post => {
            // todo: fix repeating key prop
            const ident = `id${ctr}`
            return (
              <div
                key={ident}
                style={
                {
                  border: '2px solid black',
                  width: '300px',
                }
                }
              >
                <div>
                  <PostCard id={post.id} />
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
  // has been clicked
  ctr++
  let innerCtr = 0
  // const uniqKey = `${ctr}|27.00`
  return (
    <>
      <div
        style={
            {
              border: '2px solid black',
              width: '300px',
            }
              }
      >
        <div>
          <h1> Blog Posts </h1>
          <div>
            <div>
              Enter Title:
            </div>
            <input type="textarea" value={postTitle} onChange={e => setPostTitle(e.target.value)} />
          </div>
          <div>
            <div>
              Enter Image URL:
            </div>
            <input type="textarea" value={postUrl} onChange={e => setPostUrl(e.target.value)} />
          </div>
          <div>
            <div>
              Enter Description:
            </div>
            <input type="textarea" value={postDescription} onChange={e => setPostDescription(e.target.value)} />
          </div>

          <div>
            <Button
              type="button"
              onClick={() => {
              // send the imageURL, description, and title to the post
                addBlogPostInner(postTitle, postUrl, postDescription)
                setPostTitle('')
                setPostUrl('')
                setPostDescription('')
                dispatchSetAddClickedStatusInner(!addClickedStatus)
              }}
            >
              Save!
            </Button>
            <Button
              type="button"
              onClick={() => {
                dispatchSetAddClickedStatusInner(!addClickedStatus)
              }}
            >
              Cancel!
            </Button>
          </div>
        </div>
        <div key={ctr}>
          {filterPosts(blogPostsInner).map(post => {
            // todo: fix repeating key prop
            const uniqueId = `${ctr}|${innerCtr}`
            innerCtr++
            return (
              <div>
                <PostCard key={uniqueId} id={post.id} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
  // only want to display non-deleted posts
}

const mapStateToProps = state => ({
  blogPostsInner: state.blogPosts,
  addClickedStatus: state.addClickedStatus,
})

// not sold on this delete working
const mapDispatchToProps = dispatch => ({
  addBlogPostInner: (titleText, imageURL, descriptionText) => dispatch(addBlogPost(titleText, imageURL, descriptionText)),
  editBlogPost: (titleText, imageURL, descriptionText, idNum) => dispatch(editBlogPost(titleText, imageURL, descriptionText, idNum)),
  deleteBlogPost: () => dispatch(deleteBlogPost()),
  dispatchSetAddClickedStatusInner: addStatus => dispatch(setAddClickedStatus(addStatus)),
})

export default connect(mapStateToProps, mapDispatchToProps)(blogPosts)
