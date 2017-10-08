export default {
  inserted: function (el, bindings, vnode) {
    // default append to <body>
    const container = bindings.arg ? document.getElementById(bindings.arg) : document.body
    if (container) {
      (bindings.modifiers.prepend && container.firstChild) ? container.insertBefore(el, container.firstChild) : container.appendChild(el)
    } else {
      console.warn('v-' + name + ' target element id "' + bindings.arg + '" not found.')
    }
  },
  unbind: function (el) {
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
  }
}
