import appNav from './_app/nav/nav'

export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {
    // 임시
    window.root = this.$root
  },
  components: { appNav },
  templateSrc: './app.html',
  styleSrc: './app.css'
}
