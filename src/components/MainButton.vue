<template lang="html">
  <div class="main-button-wrapper">
    <button class="main-button" v-touch-click @click="$emit('click')">
      <i :class="'ion-ios-' + tool"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: String,
      default: 'add'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$main-button-size: 60px !default;

.main-button-wrapper {
  position: relative;
  width: $main-button-size;
  align-self: flex-end;
}

.main-button {
  outline: none;
  border: none;
  position: absolute;
  bottom: 0;
  width: $main-button-size;
  height: $main-button-size;
  border-radius: 50%;
  background-color: $brand-primary;
  text-align: center;
  color: white;
  box-shadow: 0px 20px 50px -10px fade_out($brand-primary, 0.5);

  i {
    display: block;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    font-size: $main-button-size;
    line-height: $main-button-size;
  }

  &:hover, &:active {
    background-color: lighten($brand-primary, 20);
  }
}
</style>
