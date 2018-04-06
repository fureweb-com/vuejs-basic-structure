export default {
  name: 'app-nav',
  data() {
    return {}
  },
  methods: {
    move(url) {
      this.$router.push(url)
    }
  },
  templateSrc: './nav.html',
  styleSrc: './nav.css'
}
