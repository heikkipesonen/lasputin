import Vue from 'vue'
import transferDom from './transferDom'
import scrollContainer from './scrollContainer'
import scrollY from './scrolly'
import touchClick from './touchClick'

Vue.directive('transfer-dom', transferDom)
Vue.directive('scroll-container', scrollContainer)
Vue.directive('scroll-y', scrollY)
Vue.directive('touch-click', touchClick)
