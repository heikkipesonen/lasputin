<template lang="html">
  <div class="total-display layout-column">
    <h4 class="text-uppercase text-primary">Total</h4>
    <span class="total-amount">vat 0%: {{ sum | currency }}</span>
    <span class="vat-amount">vat: {{ vatAmount | currency }}</span>
    <span class="with-vat-amount">{{ withVat | currency }}</span>
  </div>
</template>

<script>
import { withVat, vatAmount } from '@/helpers/vat'

export default {
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  computed: {
    sum () {
      return this.value.reduce((total, item) => {
        return total + item.value
      }, 0)
    },

    withVat () {
      return this.value.reduce((total, item) => {
        return total + withVat(item.value, item.vatBase)
      }, 0)
    },

    vatAmount () {
      return this.value.reduce((total, item) => {
        return total + vatAmount(item.value, item.vatBase)
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.total-display {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  text-align: right;
}

.with-vat-amount {
  border-top: 1px solid $brand-primary;
  padding-top: 4px;
  margin-top: 4px;
  font-weight: 800;
}
</style>
