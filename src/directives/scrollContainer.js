import { debounce } from 'lodash'
import { getPointer } from '@/helpers/pointer'

export default {
  inserted (el) {
    const container = el
    let lastEvent = false
    let direction = false

    let scrollHeight
    let offsetHeight

    const onStart = (evt) => {
      lastEvent = getPointer(evt)
      scrollHeight = container.scrollHeight
      offsetHeight = container.offsetHeight
    }

    const onMove = (evt) => {
      if (scrollHeight <= offsetHeight) {
        evt.preventDefault()
        return
      }

      if (lastEvent) {
        const pointer = getPointer(evt)
        const dx = pointer.x - lastEvent.x
        const dy = pointer.y - lastEvent.y

        if (Math.abs(dx) > Math.abs(dy)) {
          if (!direction) direction = 'x'
        } else {
          if (!direction) direction = 'y'
        }

        if (direction === 'x') {
          evt.preventDefault()
        } else {
          evt.stopPropagation()
        }
      }
    }

    const onEnd = () => {
      lastEvent = false
      direction = false
    }

    const checkScroll = () => {
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

    container.classList.add('scroll-container')
    container.addEventListener('scroll', debounce(checkScroll, 100))
    el.addEventListener('touchstart', onStart)
    el.addEventListener('touchmove', onMove)
    el.addEventListener('touchend', onEnd)

    checkScroll()
  }
}
