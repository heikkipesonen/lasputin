import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Invoice from '@/views/invoice'
import InvoiceRow from '@/views/invoice/InvoiceRow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/invoice',
      name: 'Invoice',
      component: Invoice,
      children: [
        {
          path: '/row',
          name: 'InvoiceRow',
          component: InvoiceRow
        }
      ]
    }
  ]
})
