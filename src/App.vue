<template>
  <div id="app">
    <transition name="view">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/index';
$view-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1) !default;

.view-enter-active, .view-leave-active {
  transition: $view-transition;
  transform: translate3d(0, 0, 0);
}


.view-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.view-leave-to {
  transform: translate3d(-100%, 0, 0);
}

</style>
