import { fetchMarvelPending, fetchMarvelSuccess, fetchMarvelError } from '../redux/actions'

const fetchMarvel = () => {
  return dispatch => {
    dispatch(fetchMarvelPending())
    fetch('/api/allcharacter')
    .then(res => {
      return res.json()
    })
    .then(res => {
      if(res.error) {
        throw(res.error)
      }
      const data = res.response.data
      dispatch(fetchMarvelSuccess(data))
      return data
    })
    .catch(error => {
      dispatch(fetchMarvelError(error))
    })
  }
}

const getByCharacters = (characterId = 0) => {
  return dispatch => {
    dispatch(fetchMarvelPending())
    fetch('/api/bycharacter', {
      headers: new Headers({
        id: characterId
      })
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if(res.error) {
        throw(res.error)
      }
      const data = res.response.data
      dispatch(fetchMarvelSuccess(data))
      return data
    })
    .catch(error => {
      dispatch(fetchMarvelError(error))
    })
  }
}

module.exports = {
  fetchMarvel,
  getByCharacters
}