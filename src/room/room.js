import req2svr from './req2svr'

export default {
  name: 'app-room',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    req2svr.test().then(
      r => { this.list = r },
      err => console.error(err)
    )
  },
  templateSrc: './room.html',
  styleSrc: './room.css'
}
