<template lang="html">
  <section class="view-section">
    <div class="section-title layout-row">
      <div class="layout-column flex">
        <span class="section-title-label text-primary text-uppercase">{{ label }}</span>
        <span class="section-title-sublabel thin text-muted">{{ sublabel }}</span>
      </div>
      <div class="layout-row ">
        <slot name="controls"></slot>
      </div>
    </div>
    <div class="section-content">
      <slot></slot>
    </div>

    <div class="section-footer">
      <div class="section-footer-content">
        <slot name="footer"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    sublabel: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
$section-title-border: 1px solid $brand-primary !default;

.section-title {
  margin-left: -1em;
  margin-right: -1em;
}

.section-title-label {
  font-size: 12pt;
}

.section-title-sublabel {
  font-size: 10pt;
}

.view-section {
  padding-top: 1em;
  padding-bottom: 1em;
}

.section-footer {
  background-color: #eee;
  margin-left: -2em;
  margin-right: -2em;


  .section-footer-content {
    &:not(:empty) {
      padding: 1em 2em 3em 2em;
    }
  }
}
</style>
