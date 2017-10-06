<template lang="html">
<SidePane previous="Invoice" title="Invoice row" subtitle="add new invoice row" v-model="_visible">
  <InputContainer label="description" v-model="model.description"></InputContainer>
  <NumberInput label="amount" :decimals="0" v-model="model.amount"></NumberInput>
  <TaxedValueInput label="value" v-model="model.value" @input=""></TaxedValueInput>
  <TaxedValueInput label="total" v-model="total"></TaxedValueInput>

  <MainButton slot="toolbar" @click="commit"/>
</SidePane>
</template>

<script>

const INITIAL_STATE = {
  description: '',
  value: 0,
  total: 0,
  amount: 0
}

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    model: {
      type: Object,
      default () {
        return {
          ...INITIAL_STATE
        }
      }
    }
  },

  data () {
    return {
      vatBase: 24
    }
  },

  computed: {
    _visible: {
      get () {
        return this.visible
      },

      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },

    total: {
      set (value) {

      },

      get () {
        return this.model.value * this.model.amount
      }
    },

    rowValue () {
      return [
        {
          value: this.total,
          vatBase: this.vatBase
        }
      ]
    }
  },

  methods: {
    commit () {
      this.$emit('commit', this.model)
      this._visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
