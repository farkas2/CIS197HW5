import { connect } from 'react-redux'
import React from 'react'

const bioImgAndText = props => {
  const { biographyProp } = props
  const imgUrl = biographyProp.image
  const bioText = biographyProp.description
  if (imgUrl === '') {
    return (
      <>
        <br />
        <img
          src={imgUrl}
          alt=""
        />
        <br />
        {bioText}
      </>
    )
  }
  return (
    <>
      <br />
      <img
        src={imgUrl}
        alt=""
        style={{ height: 200, width: 200 }}
      />
      <br />
      {bioText}
    </>
  )
}

const mapStateToProps = state => ({
  biographyProp: state.bio,
})

export default connect(mapStateToProps)(bioImgAndText)
