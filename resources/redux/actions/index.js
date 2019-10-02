import {
  FETCH_MARVEL_PENDING,
  FETCH_MARVEL_SUCCESS,
  FETCH_MARVEL_ERROR
} from './actionTypes'

export const fetchMarvelPending = () => ({
  type: FETCH_MARVEL_PENDING
})

export const fetchMarvelSuccess = marvel => ({
  type: FETCH_MARVEL_SUCCESS,
  marvel
})

export const fetchMarvelError = error => ({
  type: FETCH_MARVEL_ERROR,
  error
})