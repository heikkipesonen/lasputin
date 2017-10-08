<template lang="html">
  <div class="input-container" :class="{'has-value': hasValue}">
    <input v-if="type === 'text'" type="text" v-model="_inputValue" @focus="$emit('focus')" @blur="$emit('blur')">
    <input v-if="type === 'number'" type="text" readonly v-touch-click :value="_inputValue" @click="$emit('focus')">
    <div class="input-label">{{ label }}</div>
    <slot></slot>
  </div>
</template>

<script>
import { decimal } from '@/filters'

export default {
  props: {
    value: {
      type: [String, Number]
    },

    label: {
      type: String
    },

    type: {
      type: String,
      default: 'text',
      validate: (value) => ['text', 'number'].indexOf(value) > -1
    },

    decimals: {
      type: Number,
      default: 2
    }
  },

  computed: {
    _inputValue: {
      get () {
        if (this.type === 'number') {
          return decimal(this.value, this.decimals)
        }
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    },

    hasValue () {
      return this.value !== '' && this.value !== null && this.value !== undefined
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.input-container {
  position: relative;
  padding-bottom: 2em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
}

.input-label {
  font-size: 1rem;
  left: 0;
  font-weight: 200;
  position: absolute;
  top: 24px;
  transition: 0.2s ease-out;
  pointer-events: none;
}

.input {
  min-height: 1em;
}

input, input:active, input:focus, input:hover, .input {
  padding: 8px 0;
  margin: 0;
  border-radius: 0;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 200;
  border-bottom: 1px solid $brand-primary;
}

input:focus + .input-label, .input-container.has-value .input-label {
  top: 0;
  transform: scale3d(0.8, 0.8, 1) translate3d(-4px, 0, 0);
  color: $brand-primary;
}

</style>
