import axios from 'axios'
import { GET_VIDEOGAMES } from './actions-types'

export const getVideogames = () => {
  // return {type:GET_UESRS, payload:[]}
  return async (dispatch) => {
    const apiData = await axios.get('http://localhost:3001/videogames')
      return dispatch({ type: GET_VIDEOGAMES, payload: apiData.data})
  }
}