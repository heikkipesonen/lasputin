<template lang="html">
  <transition name="bottom-sheet">
    <div class="bottom-sheet" v-transfer-dom v-if="value" @touchstart.stop.prevent="dragStart" @touchend.stop.prevent="dragEnd" @touchmove.stop.prevent="onDrag" :style="style">
      <slot></slot>
      <div class="controls">
        <slot name="controls"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
const SHEET_ANIMATION_DURATION = 400
const SHEET_HIDE_POINT = 30
import { getPointer } from '@/helpers/pointer'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },

    max: {
      type: [Number, Boolean],
      default: 0
    },

    min: {
      type: [Number, Boolean],
      default: 0
    }
  },

  data () {
    return {
      position: {
        x: 0,
        y: 0
      },
      viewHeight: 0,
      animationDuration: 0,
      lastEvent: null
    }
  },

  computed: {
    style () {
      return {
        transform: `translate3d(${this.position.x}%, ${this.position.y}%, 0)`,
        transitionDuration: `${this.animationDuration}ms`
      }
    }
  },

  methods: {
    dragStart (evt) {
      this.viewHeight = this.$el.offsetHeight
      this.animationDuration = 0
      this.lastEvent = getPointer(evt)
    },

    onDrag (evt) {
      if (this.lastEvent) {
        const currentPosition = getPointer(evt)
        // const dx = currentPosition.x - this.lastEvent.x
        const tension = 0.3
        const dy = (currentPosition.y - this.lastEvent.y) / this.viewHeight * 100
        const dt = currentPosition.timeStamp - this.lastEvent.timeStamp

        if (this.max !== false && this.position.y + dy > this.max) {
          this.position.y = this.position.y + dy * tension
        } else if (this.min !== false && this.position.y + dy < this.min) {
          this.position.y = this.position.y + dy * tension
        } else {
          this.position.y = this.position.y + dy
        }

        this.lastEvent = {
          ...currentPosition,
          velocity: dy / dt
        }
      }
    },

    dragEnd () {
      if (this.lastEvent.velocity > 0.4 || this.position.y > SHEET_HIDE_POINT) {
        this.hide()
      } else {
        this.position.y = 0
        this.animationDuration = SHEET_ANIMATION_DURATION
      }
      this.lastEvent = null
    },

    hide () {
      this.position.y = 110
      this.animationDuration = SHEET_ANIMATION_DURATION
      setTimeout(() => {
        this.$emit('input', false)
      }, SHEET_ANIMATION_DURATION)
    }
  },

  watch: {
    value () {
      if (this.value) {
        this.position.y = 0
        this.animationDuration = SHEET_ANIMATION_DURATION
      } else {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
$bottom-sheet-transition: cubic-bezier(0.23, 1, 0.32, 1) !default;
$bottom-sheet-bg: white !default;

.bottom-sheet {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  box-shadow: 0px 0px 50px -10px fade_out($brand-primary, 0.7);
  background-color: $bottom-sheet-bg;
  display: flex;
  flex-direction: column;
  padding: 1em;
  transition-timing-function: $bottom-sheet-transition;
}

.bottom-sheet-enter-active, .bottom-sheet-leave-active {
  transition: 0.4s;
  transform: translate3d(0, 0, 0) !important;
}
.bottom-sheet-enter, .bottom-sheet-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(0, 110%, 0) !important;
}

.controls {
  position: absolute;
  top: 8px;
  right: 16px;
  color: $brand-primary;
  font-size: 42px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
</style>
