import { FETCH_MARVEL_ERROR, FETCH_MARVEL_PENDING, FETCH_MARVEL_SUCCESS } from '../actions/actionTypes'

const initialState = {
  pending: false,
  marvel: [],
  error: null
}

export const marvelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARVEL_SUCCESS:
      return {
        ...state,
        pending: false,
        marvel: action.marvel
      }
    case FETCH_MARVEL_ERROR: 
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case FETCH_MARVEL_PENDING:
      return {
        ...state,
        pending: true,
        marvel: []
      }
    default:
      return state;
  }
}

export const fetchMarvelError = () => ({
  type: FETCH_MARVEL_ERROR
})

export const fetchMarvelPendent = () => ({
  type: FETCH_MARVEL_PENDING
})