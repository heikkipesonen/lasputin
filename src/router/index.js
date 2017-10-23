import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Invoice from '@/views/invoice'
import InvoiceRow from '@/views/invoice/InvoiceRow'
import Expenses from '@/views/expenses'
import Travel from '@/views/travel'

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
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses,
      children: [
      ]
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel,
      children: [
      ]
    }
  ]
})
