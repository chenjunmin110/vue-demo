import Scroll from '../components/Scroll'
import Header from '../components/Header'
import { Icon } from 'vant'
export default {
  install (Vue) {
    Vue.component(Scroll.name, Scroll)
    Vue.component(Header.name, Header)
    Vue.component(Icon.name, Icon)
  }
}
