<template lang="html">
  <button v-touch-click @click="() => $emit('click')">
    <i :class="'ion-ios-' + tool"></i>
  </button>
</template>

<script>
export default {
  props: {
    tool: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$grid-gutter-width: 16px !default;
$tool-button-size: 32px !default;
$tool-font-color: $brand-primary !default;
$tool-font-active-color: $brand-primary !default;
$tool-button-shadow-color: $brand-primary !default;

button, button:active, button:focus, button:hover {
  outline: none;
  border: none;
  background-color: transparent;
}

button {
  width: $tool-button-size;
  height: $tool-button-size;

  i {
    line-height: $tool-button-size;
    font-size: $tool-button-size;
    color: $tool-font-color;
  }

  &:active {
    text-shadow: 0px 0px 20px $tool-button-shadow-color;

    i {
      color: $tool-font-active-color
    }
  }
}
</style>
