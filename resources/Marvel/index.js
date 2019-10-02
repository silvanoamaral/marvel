import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMarvel } from '../services/fetchMarvel'
import MarvelList from '../components/MarvelList'
import Loading from '../components/Loading'

class Marvel extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMarvel())
  }

  render() {
    const { marvel, error, pending } = this.props
    const isEmpty = marvel.length === 0

    //Ref projeto https://github.com/thiagoterleski/react-marvel-catalog
    //Ref projeto com filtro: https://github.com/inglkruiz/react-marvel-api
    return (
      <div className="container">
        {isEmpty
          ? (pending ? <Loading /> : <h2>Empty.</h2>)
          : <MarvelList marvel={marvel} />
        }
      </div>
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
)(Marvel)
