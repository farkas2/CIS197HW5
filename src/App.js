import React from 'react'
import Button from 'react-bootstrap/Button'
import Bio from './components/bio'
import BlogPosts from './components/blogPosts'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <>
    <div
      style={
            {
              border: '2px solid black',
              width: '300px',
            }
          }
    >
      <Bio />
    </div>
    <BlogPosts />
  </>
)

export default App
