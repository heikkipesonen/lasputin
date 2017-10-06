// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import View from '@/components/View'
import MainButton from '@/components/MainButton'
import ControlButton from '@/components/ControlButton'
import ToolButton from '@/components/ToolButton'
import InputContainer from '@/components/InputContainer'
import NumberInput from '@/components/NumberInput'
import TaxedValueInput from '@/components/TaxedValueInput'
import SidePane from '@/components/SidePane'
import ViewSection from '@/components/ViewSection'
import TotalDisplay from '@/components/TotalDisplay'

import '@/directives/scrollContainer'

import { money } from '@/filters'

Vue.filter('currency', money)

Vue.component('ViewContainer', View)
Vue.component('MainButton', MainButton)
Vue.component('ControlButton', ControlButton)
Vue.component('InputContainer', InputContainer)
Vue.component('ToolButton', ToolButton)
Vue.component('NumberInput', NumberInput)
Vue.component('TaxedValueInput', TaxedValueInput)
Vue.component('SidePane', SidePane)
Vue.component('ViewSection', ViewSection)
Vue.component('TotalDisplay', TotalDisplay)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
