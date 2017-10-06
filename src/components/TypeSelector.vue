<template lang="html">
<div class="type-selector">
  <div class="type-selector-list">
    <div class="type" v-for="(type, index) in types" :class="{selected: type === value}" @touchend.stop.prevent="$emit('input', type)">
      {{ type }}
    </div>
    <span class="suffix">{{ suffix }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    types: {
      type: Array,
      validate: (types) => types.every((type) => typeof type === String)
    },

    value: {
      type: String
    },

    suffix: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
$type-selector-item-color: #ddd !default;
$type-selector-item-selected-color: $brand-primary !default;

.type-selector {
  display: flex;
  justify-content: flex-end;
}

.type-selector-list {
  display: flex;
  flex-direction: row;
  font-weight: 800;
}

.type, .suffix {
  margin-left: 0.3em;
}

.type {
  color: $type-selector-item-color;

  &.selected {
    color: $type-selector-item-selected-color
  }
}
</style>
