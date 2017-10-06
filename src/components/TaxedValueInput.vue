<template lang="html">
  <NumberInput :label="label" :decimals="decimals" v-model="_inputValue">
    <TypeSelector v-model="type" :types="types" suffix="vat"></TypeSelector>
  </NumberInput>
</template>

<script>
import NumberInput from '@/components/NumberInput'
import TypeSelector from '@/components/TypeSelector'
import { withVat, withoutVat } from '@/helpers/vat'

export default {
  components: {
    NumberInput,
    TypeSelector
  },

  props: {
    value: {
      type: Number
    },

    label: {
      type: String
    },

    vatBase: {
      type: Number,
      default: 24
    },

    decimals: {
      type: Number,
      default: 2
    }
  },

  data () {
    return {
      type: 'without',
      types: ['with', 'without']
    }
  },

  computed: {
    _inputValue: {
      get () {
        if (this.type === 'with') {
          return withVat(this.value, this.vatBase)
        }
        return this.value
      },

      set (value) {
        if (this.type === 'with') {
          value = withoutVat(this.value, this.vatBase)
        }
        this.$emit('input', value)
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="css">
</style>
