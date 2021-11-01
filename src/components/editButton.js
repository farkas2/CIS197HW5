import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { setEditClickedStatus } from '../actions'

const editButton = props => {
  const { editClickedStatus, dispatchSetEditClickedStatus } = props
  // console.log('editClickedStatus withing editButton main')
  // console.log(editClickedStatus)

  // console.log('dispatchSetEditClickedStatus withing editButton main')
  // console.log(dispatchSetEditClickedStatus)

  return (
    <Button
      type="button"
      onClick={() => {
        dispatchSetEditClickedStatus(!editClickedStatus)
      }}
    >
      Edit!
    </Button>
  )
}

const mapStateToProps = state => ({
  editClickedStatus: state.editClickedStatus,
})

const mapDispatchToProps = dispatch => ({
  dispatchSetEditClickedStatus: editStatus => dispatch(setEditClickedStatus(editStatus)),
})

export default connect(mapStateToProps, mapDispatchToProps)(editButton)
