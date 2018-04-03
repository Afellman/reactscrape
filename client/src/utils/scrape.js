import axios from 'axios'

const key = "QuLQ954Hp0N741j2Osy5IkaB1StXzQOg6l5Kh9yj"
export default {
  getApiData: (date) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`)
  }, 
  save: (astroid) => {
    return axios.post(`/api/saved`, astroid)
  }, 
  getsaved: () => {
    return axios.get('/api/saved')
  },
  deleteOne: (astroid) => {
    
    return axios.delete('/api/saved', {data: {name: astroid}})
  }

}