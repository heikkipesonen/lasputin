<template lang="html">
  <NumberInput :min="min" :max="max" :label="label" :decimals="decimals" v-model="_inputValue">
    <TypeSelector v-model="_vatMode" :types="types" suffix="vat"></TypeSelector>
  </NumberInput>
</template>

<script>
import NumberInput from '@/components/NumberInput'
import TypeSelector from '@/components/TypeSelector'
import { withVat, withoutVat } from '@/helpers/vat'

const types = ['with', 'without']

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
    },

    vat: {
      type: Boolean,
      default: false
    },

    min: {
      type: [Number, Boolean],
      default: false
    },

    max: {
      type: [Number, Boolean],
      default: false
    }
  },

  data () {
    return {
      vatMode: this.vat,
      types: [...types]
    }
  },

  computed: {
    _vatMode: {
      get () {
        return this.vatMode ? 'with' : 'without'
      },

      set (value) {
        this.vatMode = value === 'with'
        this.$emit('changeVat', this.vatMode)
      }
    },
    _inputValue: {
      get () {
        if (this.vatMode) {
          return withVat(this.value, this.vatBase)
        }
        return this.value
      },

      set (value) {
        console.log(this.vatMode)
        console.log(withoutVat(value, this.vatBase))
        if (this.vatMode) {
          value = withoutVat(value, this.vatBase)
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
