<template lang="html">
  <div class="view-title-container">
    <router-link class="previous-state" :to="{name: previous}" v-if="previous">
      <h4>{{ previous || "&nbsp;" }}</h4>
    </router-link>
    <h2 class="title">{{ title || "&nbsp;" }}</h2>
    <h4 class="subtitle">{{ subtitle || "&nbsp;"}}</h4>
  </div>
</template>

<script>
export default {
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


.title {
  color: $title-text;
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

</style>
