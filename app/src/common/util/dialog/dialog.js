import Vue from 'vue'

import Toast from './toast'
import Confirm from './confirm'
import Loading from './loading'
import DialogVue from './dialog.vue'
import Rotate from './rotate'
import Refresh from './Refresh'

const Dialog = {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$Dialog', {
      value: this,
      writable: false
    })
  },
  Toast (options = {}) {
    const ToastFrame = Vue.extend(Toast)
    let vm = document.getElementById('toast')
    if (vm !== null) {
      document.body.removeChild(vm)
    }
    let div = document.createElement('div')
    div.id = 'Toast'
    document.body.appendChild(div)
    let $vm = new ToastFrame({
      el: '#Toast'
    })
    if (typeof options === 'object') {
      Object.assign($vm, options)
    } else if (typeof options === 'string' || typeof options === 'number') {
      $vm.content = options
    }
  },
  Confirm (options = {}) {
    const ConfirmFrame = Vue.extend(Confirm)
    let div = document.createElement('div')
    div.id = 'Confirm'
    document.body.appendChild(div)
    let $vm = new ConfirmFrame({
      el: '#Confirm'
    })
    if (typeof options === 'object') {
      Object.assign($vm, options)
    } else if (typeof options === 'string' || typeof options === 'number') {
      $vm.content = options
    }
  },
  Dialog (options = {}) {
    const DialogFrame = Vue.extend(DialogVue)
    let div = document.createElement('div')
    div.id = 'Dialog'
    document.body.appendChild(div)
    let $vm = new DialogFrame({
      el: '#Dialog'
    })
    if (typeof options === 'object') {
      Object.assign($vm, options)
    } else if (typeof options === 'string' || typeof options === 'number') {
      $vm.content = options
    }
  },
  Rotate (options = {}) {
    if (options.ele === undefined) {
      options.ele = document.body
    }
    let vm = document.getElementById('rotate')
    if (vm !== null) {
      options.ele.removeChild(vm)
    }
    if (options.state === 'end') {
      return
    }
    const RotateFrame = Vue.extend(Rotate)
    let div = document.createElement('div')
    div.id = 'Rotate'
    options.ele.appendChild(div)
    let $vm = new RotateFrame({
      el: '#Rotate'
    })
    if (typeof options === 'object') {
      Object.assign($vm, options)
    } else if (typeof options === 'string' || typeof options === 'number') {
      $vm.content = options
    }
  },
  Refresh (options = {}) {
    if (options.ele === undefined) {
      options.ele = document.body
    }
    let vm = document.getElementById('refresh')
    if (vm !== null) {
      options.ele.removeChild(vm)
    }
    if (options.state === 'end') {
      return
    }
    const RefreshFrame = Vue.extend(Refresh)
    let div = document.createElement('div')
    div.id = 'Refresh'
    options.ele.appendChild(div)
    let $vm = new RefreshFrame({
      el: '#Refresh'
    })
    if (typeof options === 'object') {
      Object.assign($vm, options)
    } else if (typeof options === 'string' || typeof options === 'number') {
      $vm.content = options
    }
  },
  Loading (options = {}) {
    if (options.ele === undefined) {
      options.ele = document.body
    }
    if (options.state === 'end') {
      let vm = document.getElementById('loading')
      options.ele.removeChild(vm)
      return
    }
    const loadingFrame = Vue.extend(Loading)
    let div = document.createElement('div')
    div.id = 'loading'
    options.ele.appendChild(div)
    // eslint-disable-next-line new-cap
    let $vm = new loadingFrame({
      el: '#loading'
    })
    if (typeof options === 'object') {
      Object.assign($vm, options)
    } else if (typeof options === 'string' || typeof options === 'number') {
      $vm.content = options
    }
  }
}
export default Dialog
