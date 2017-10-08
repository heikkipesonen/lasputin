import { getPointer } from '@/helpers/pointer'

export default {
  inserted (el) {
    const container = el
    let lastEvent = false
    let direction = false

    const onStart = (evt) => {
      lastEvent = getPointer(evt)
    }

    const onMove = (evt) => {
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

    container.addEventListener('touchstart', onStart)
    container.addEventListener('touchmove', onMove)
    container.addEventListener('touchend', onEnd)
  }
}
