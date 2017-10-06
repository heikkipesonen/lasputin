<template lang="html">
  <div class="view-toolbar">
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$view-toolbar-height: 42px !default;

.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  margin-bottom: 0.5em;
  max-height: $view-toolbar-height;
  min-height: $view-toolbar-height;
}

.view-toolbar {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+97&0+0,1+61 */
  background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 61%, rgba(255,255,255,1) 97%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 61%,rgba(255,255,255,1) 97%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 61%,rgba(255,255,255,1) 97%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
}
</style>
