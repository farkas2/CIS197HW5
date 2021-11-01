import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Title from './Title'
import { updateBio, setEditClickedStatus } from '../actions'
import EditButton from './editButton'
import BioImageAndText from './bioImageAndText'

// need a case for edit has been clicked,
// need a case for edit not clicked

const bio = props => {
  const [name, setName] = useState('')
  const [biography, setBiography] = useState('')

  const {
    biographyProp, editClickedStatus, dispatchUpdateBio, dispatchSetEditClickedStatus,
  } = props

  if (editClickedStatus) {
    // has been clicked, prompt for new name and bio, also have cancel and save buttons
    return (
      <>
        <Title />
        <div>
          Enter your image URL:
          <input type="textarea" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          Enter your description:
          <input type="textarea" value={biography} onChange={e => setBiography(e.target.value)} />
        </div>

        <Button
          type="button"
          onClick={() => {
            dispatchUpdateBio(name, biography)
            dispatchSetEditClickedStatus(!editClickedStatus)
          }}
        >
          Save!
        </Button>

        <Button
          type="button"
          onClick={() => {
            dispatchSetEditClickedStatus(!editClickedStatus)
          }}
        >
          Cancel!
        </Button>
      </>
    )
  }
  // edit not clicked, just show title and edit button
  return (
    <>
      <Title />
      <EditButton />
      <BioImageAndText />
    </>
  )
}

// i'm gonna need both a bio input and a name input

const mapStateToProps = state => ({
  biographyProp: state.bio,
  editClickedStatus: state.editClickedStatus,
})

// takes a dispatch and outputs a set of actions associated with the input
const mapDispatchToProps = dispatch => ({
  dispatchUpdateBio: (img, bioToUpdate) => dispatch(updateBio(img, bioToUpdate)),
  dispatchSetEditClickedStatus: editStatus => dispatch(setEditClickedStatus(editStatus)),
})

// export default bio
export default connect(mapStateToProps, mapDispatchToProps)(bio)
