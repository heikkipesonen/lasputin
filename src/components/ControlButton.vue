<template lang="html">
  <button class="control-button" @touchend.prevent.stop="() => $emit('click')" @mouseup.prevent.stop="$emit('click')">
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
$control-button-size: 30px !default;

.control-button {
  position: relative;
  outline: none;
  border: none;
  width: $control-button-size;
  height: $control-button-size;
  border-radius: 50%;
  color: $brand-primary;
  text-align: center;
  background-color: transparent;
  border: 1px solid $brand-primary;
  box-shadow: 0px 0px 20px -10px rgba(0,0,0,0.3);

  i {
    display: block;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;

    font-size: $control-button-size;
    line-height: $control-button-size;
  }

  &:hover, &:active {
    background-color: fade_out($brand-primary, 0.7);
  }
}
</style>
