<template lang="html">
  <div class="view">
    <div class="view-content-wrapper">
      <div class="view-inner-content" v-scroll-container>
        <ViewTitle
          :previous="previous"
          :title="title"
          :subtitle="subtitle" />

        <div class="view-content">
          <slot></slot>
        </div>
      </div>
    </div>
    <ViewToolbar class="view-toolbar">
      <slot name="toolbar"></slot>
    </ViewToolbar>
    <slot name="external"></slot>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$view-margin: 2em !default;
$view-background: white !default;

.view {
  background-color: $view-background;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

.view-content-wrapper {
  position: relative;
  flex: 1 0 auto;

  .view-inner-content {
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    padding-bottom: 64px;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}


.view-content {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-left: $view-margin;
  padding-right: $view-margin;
}

.view-toolbar {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
}

</style>
