<template lang="html">
  <InputContainer v-model="_inputValue" type="number" :label="label" @focus="showInput" @blur="hideInput" :decimals="decimals">
    <slot></slot>
    <NumberKeyPad :label="label" v-model="_inputValue" :visible="inputVisible" @close="hideInput" @commit="hideInput" :decimals="decimals"></NumberKeyPad>
  </InputContainer>
</template>

<script>
import NumberKeyPad from '@/components/NumberKeyPad'

export default {
  components: {
    NumberKeyPad
  },

  props: {
    value: {
      type: Number
    },

    label: {
      type: String
    },

    decimals: {
      type: Number,
      default: 2
    }
  },

  data () {
    return {
      inputVisible: false
    }
  },

  computed: {
    _inputValue: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    }
  },

  methods: {
    showInput () {
      this.inputVisible = true
    },

    hideInput () {
      this.inputVisible = false
    }
  }
}
</script>

<style lang="css">
</style>
