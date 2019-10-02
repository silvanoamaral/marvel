import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getByCharacters } from '../services/fetchMarvel'
import Loading from '../components/Loading'

import DetailsCharacter from '../components/DetailsCharacter'

class Character extends Component {

  componentDidMount() {
    const { match: { params }, dispatch } = this.props
    dispatch(getByCharacters(params.id))
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  render() {
    const { marvel, pending } = this.props
    const isEmpty = marvel.length === 0
    return (
      <>
        {isEmpty
          ? (pending ? <Loading /> : <h2>Empty.</h2>)
          : <DetailsCharacter props={marvel} />
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  const { marvelReducer } = state

  const {
    error,
    pending,
    marvel
  } = marvelReducer || {
    error: false,
    pending: true,
    marvel: []
  }

  return {
    error,
    pending,
    marvel
  }
}

export default connect(
  mapStateToProps,
)(Character)