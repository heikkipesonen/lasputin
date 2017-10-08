<template lang="html">
  <div class="side-pane-root">
    <transition name="side-pane-overlay">
      <div class="side-pane-overlay" v-if="value" :style="overlayStyle"></div>
    </transition>
    <transition name="side-pane">
      <div class="side-pane" v-if="value" @touchstart.stop="dragStart" @touchend.stop="dragEnd" @touchmove.stop="onDrag" :style="style" v-transfer-dom>
        <div class="side-pane-content">
          <div class="side-pane-inner-content" v-scroll-container>
            <ViewTitle
            :title="title"
            :subtitle="subtitle"
            :previous="previous"
            />
            <div class="side-pane-content-wrapper">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="controls">
          <slot name="controls"></slot>
        </div>
        <ViewToolbar>
          <slot name="toolbar"></slot>
        </ViewToolbar>
      </div>
    </transition>
  </div>
</template>

<script>
const SHEET_ANIMATION_DURATION = 400
const SHEET_HIDE_POINT = 30
const SHEET_HIDE_VELOCITY = 0.2

import { getPointer } from '@/helpers/pointer'
import ViewToolbar from '@/components/ViewToolbar'
import ViewTitle from '@/components/ViewTitle'

export default {
  components: {
    ViewToolbar,
    ViewTitle
  },

  props: {
    previous: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },

    value: {
      type: Boolean,
      default: false
    },

    max: {
      type: [Number, Boolean],
      default: 100
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
      viewSize: 0,
      animationDuration: 0,
      lastEvent: null
    }
  },

  computed: {
    overlayStyle () {
      return {
        opacity: 1 - this.position.x / 100
      }
    },

    style () {
      return {
        transform: `translate3d(${this.position.x}%, ${this.position.y}%, 0)`,
        transitionDuration: `${this.animationDuration}ms`
      }
    }
  },

  methods: {
    dragStart (evt) {
      this.viewSize = this.$el.offsetWidth
      this.animationDuration = 0
      this.lastEvent = getPointer(evt)
    },

    onDrag (evt) {
      if (this.lastEvent) {
        const currentPosition = getPointer(evt)
        const tension = 0.3
        const dx = (currentPosition.x - this.lastEvent.x) / this.viewSize * 100
        const dt = currentPosition.timeStamp - this.lastEvent.timeStamp

        if (this.max !== false && this.position.x + dx > this.max) {
          this.position.x = this.position.x + dx * tension
        } else if (this.min !== false && this.position.x + dx < this.min) {
          this.position.x = this.position.x + dx * tension
        } else {
          this.position.x = this.position.x + dx
        }

        this.lastEvent = {
          ...currentPosition,
          velocity: dx / dt
        }
      }
    },

    dragEnd () {
      if (this.lastEvent.velocity > SHEET_HIDE_VELOCITY || this.position.x > SHEET_HIDE_POINT) {
        this.hide()
      } else {
        this.position.x = 0
        this.animationDuration = SHEET_ANIMATION_DURATION
      }
      this.lastEvent = null
    },

    hide () {
      this.position.x = 110
      this.animationDuration = SHEET_ANIMATION_DURATION
      setTimeout(() => {
        this.$emit('input', false)
      }, SHEET_ANIMATION_DURATION)
    }
  },

  watch: {
    value () {
      if (this.value) {
        this.position.x = 0
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
$side-pane-transition: cubic-bezier(0.23, 1, 0.32, 1) !default;
$side-pane-bg: white !default;
$view-margin: 2em !default;

.side-pane-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: fade_out($brand-primary, 0.7);
  transition-timing-function: $side-pane-transition;
}

.side-pane {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 90vw;
  box-shadow: 0px 0px 50px -10px fade_out($brand-primary, 0.3);
  background-color: $side-pane-bg;
  display: flex;
  flex-direction: column;
  transition-timing-function: $side-pane-transition;
}

.side-pane-content {
  position: relative;
  flex: 1 0 auto;
}

.side-pane-inner-content {
  position: absolute;
  top:0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
  overflow-y: auto;
}

.side-pane-content-wrapper {
  padding-left: $view-margin;
  padding-right: $view-margin;
  padding-bottom: 64px;
}

.side-pane-enter-active, .side-pane-leave-active {
  transition: 0.4s;
  transform: translate3d(0, 0, 0) !important;
}
.side-pane-enter, .side-pane-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(110%, 0, 0) !important;
}
.side-pane-overlay-enter-active, .side-pane-overlay-leave-active {
  transition: 0.2s;
  opacity: 1;
}
.side-pane-overlay-enter, .side-pane-overlay-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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

.view-toolbar {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
}
</style>
