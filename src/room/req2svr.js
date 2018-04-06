import axios from 'axios'

export default {
  test() {
    return axios.get('http://localhost:8889').then(r => r.data)
  }
}