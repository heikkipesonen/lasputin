import { getPointer } from '@/helpers/pointer'

export default {
  inserted (el) {
    let startEvent = false
    let endEvent = false

    const onStart = (evt) => {
      startEvent = getPointer(evt)
    }

    const onMove = (evt) => {
      endEvent = getPointer(evt)
    }

    const onEnd = (evt) => {
      if (!endEvent ||
        Math.abs(endEvent.x) - Math.abs(startEvent.x) < 15 &&
        Math.abs(endEvent.y) - Math.abs(startEvent.y) < 15 &&
        evt.timeStamp - startEvent.timeStamp < 500) {
        el.click()
        evt.preventDefault()
        evt.stopPropagation()
      }
    }

    el.addEventListener('touchstart', onStart)
    el.addEventListener('touchend', onEnd)
    el.addEventListener('touchmove', onMove)
  }
}
