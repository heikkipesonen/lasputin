<template lang="html">
  <div class="main-button-wrapper">
    <button class="main-button" @touchend.stop.prevent="$emit('click')">
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

$main-button-size: 52px !default;

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
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.3);

  i {
    display: block;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    font-size: $main-button-size;
    line-height: $main-button-size;
  }

  &:hover, &:active {
    background-color: lighten($brand-primary, 10);
    box-shadow: 0px 0px 50px 0px $brand-primary;
  }
}
</style>
