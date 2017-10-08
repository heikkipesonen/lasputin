<template lang="html">
  <BottomSheet v-model="keypadVisible" :max="100">
    <div class="keypad-label text-primary text-center text-small mt-1 mb-1">
      {{ label }}
    </div>
    <h2 class="text-light text-primary mb-1 text-center">{{ viewValue }}</h2>
    <div class="keypad-row" v-for="(row, rowIndex) in keys" :key="rowIndex">
      <button class="key" v-for="(key, index) in row" :key="index"
        v-touch-click
        @click="() => addValue(key)">
        {{ key.label }}
      </button>
    </div>

    <ToolButton slot="controls" tool="close" @click="$emit('close')" />
  </BottomSheet>
</template>

<script>
import BottomSheet from '@/components/BottomSheet'
import ToolButton from '@/components/ToolButton'
import { decimal } from '@/filters'

const INPUT_ABS_MAX = 9999999999

export default {
  components: {
    BottomSheet,
    ToolButton
  },

  props: {
    visible: {
      type: Boolean
    },
    label: {
      type: String
    },
    value: {
      type: Number
    },
    decimals: {
      type: Number,
      default: 2
    },
    max: {
      type: [Number, Boolean],
      default: INPUT_ABS_MAX
    },
    min: {
      type: [Number, Boolean],
      default: 0
    }
  },

  data () {
    return {
      keys: [
        [
          {
            value: 1,
            label: '1'
          },
          {
            value: 2,
            label: '2'
          },
          {
            value: 3,
            label: '3'
          }
        ],
        [
          {
            value: 4,
            label: '4'
          },
          {
            value: 5,
            label: '5'
          },
          {
            value: 6,
            label: '6'
          }
        ],
        [
          {
            value: 7,
            label: '7'
          },
          {
            value: 8,
            label: '8'
          },
          {
            value: 9,
            label: '9'
          }
        ],
        [
          {
            command: 'clearInput',
            label: 'clear'
          },
          {
            value: 0,
            label: '0'
          },
          {
            command: 'commit',
            label: 'commit'
          }
        ]
      ]
    }
  },

  computed: {
    keypadVisible: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },

    viewValue () {
      return this.value === null ? ' ' : decimal(this.value, this.decimals)
    },

    modelValue: {
      get () {
        return this.value * Math.pow(10, this.decimals)
      },

      set (value) {
        if (value !== null) {
          let inputValue = Math.round(parseInt(value)) / Math.pow(10, this.decimals)
          inputValue = this.max !== false ? inputValue <= this.max ? inputValue : this.max : inputValue
          inputValue = this.min !== false ? inputValue >= this.min ? inputValue : this.min : inputValue
          this.$emit('input', inputValue)
        } else {
          this.$emit('input', null)
        }
      }
    }
  },

  methods: {
    clearInput () {
      this.modelValue = null
    },

    commit () {
      this.$emit('commit', this.value)
    },

    addValue (key) {
      if (key.command) {
        this[key.command](key)
        return
      }

      this.modelValue = Math.round(this.modelValue).toString() + key.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$keypad-key-border-color: fade_out($brand-primary, 0.6) !default;
$keypad-key-active-border-color: $brand-primary !default;
$keypad-key-active-bg-color: fade_out($brand-primary, 0.7) !default;
$keypad-key-color: $brand-primary !default;

// .keypad {
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   box-shadow: 0px 0px 50px -10px fade_out($brand-primary, 0.7);
//   background-color: $keypad-bg;
//   display: flex;
//   flex-direction: column;
//   padding: 1em;
//   justify-content: space-around;
//   z-index: 100;
// }

.keypad-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.key {
  outline: none;
  background-color: transparent;
  border: 1px solid $keypad-key-border-color;
  border-radius: 50%;
  text-align: center;
  height: 80px;
  width: 80px;
  margin: 0.8em;
  font-size: 12pt;
  color: $keypad-key-color;
  transition: 0.1s ease-in-out;

  &:active {
    border: 1px solid $keypad-key-active-border-color;
    background-color: $keypad-key-active-bg-color;
  }
}




</style>
