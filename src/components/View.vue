<template lang="html">
  <div class="view">
    <div class="view-content-wrapper">
      <div class="view-inner-content" v-scroll-container>
        <div class="view-title-container">
          <router-link class="previous-state" :to="{name: previous}" v-if="previous">
            <h4>{{ previous || "&nbsp;" }}</h4>
          </router-link>
          <h4 class="title">{{ title || "&nbsp;" }}</h4>
          <h4 class="subtitle">{{ subtitle || "&nbsp;"}}</h4>
        </div>
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

export default {
  components: {
    ViewToolbar
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

.view-title-container {
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: $view-margin;
  padding-right: $view-margin;
  text-transform: uppercase;
  margin-left: -1em;
  margin-right: -1em;

  h4 {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
}

.view-content {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-left: $view-margin;
  padding-right: $view-margin;
}

.title {
  color: $brand-primary;
}

.subtitle {
  font-size: 0.6em;
  font-weight: 300;
  color: $brand-secondary;
}

.previous-state h4 {
  font-size: 0.8em;
  color: desaturate($brand-primary, 50);
}

.view-toolbar {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
}

</style>
