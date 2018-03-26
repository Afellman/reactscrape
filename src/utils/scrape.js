import axios from 'axios'

const key = "QuLQ954Hp0N741j2Osy5IkaB1StXzQOg6l5Kh9yj"
export default {
  getApiData: (date) => {
    // ** need to pass in todays day **
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`)
  }
}