import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlusSquare,
  faChartLine,
  faPlusCircle,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add([faPlusSquare, faChartLine, faPlusCircle, faTachometerAlt])
Vue.component('font-awesome-icon', FontAwesomeIcon)
