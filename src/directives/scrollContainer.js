import Vue from 'vue'
import { debounce } from 'lodash'

Vue.directive('scroll-container', {
  inserted (el) {
    const checkScroll = () => {
      const container = el
      const scroll = container.scrollTop
      const scrollHeight = container.scrollHeight
      const offsetHeight = container.offsetHeight
      const maxScroll = scrollHeight - offsetHeight

      if (scroll === 0) {
        container.scrollTop = 1
      } else if (scroll === maxScroll) {
        container.scrollTop = maxScroll - 1
      }
    }

    el.addEventListener('scroll', debounce(checkScroll, 100))
  }
})
