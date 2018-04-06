import main from './main/main'
import room from './room/room'
import faq from './faq/faq'

export default [
  { path: '/', name: 'main', component: main },
  { path: '/faq', name: 'faq', component: faq },
  { path: '/room', name: 'room', component: room },
  { path: '*', redirect: '/' }
]