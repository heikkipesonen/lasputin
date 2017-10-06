export const getPointer = (evt) => {
  const touch = evt.touches[0]
  return {
    x: touch.pageX,
    y: touch.pageY,
    timeStamp: evt.timeStamp
  }
}
