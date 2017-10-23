<template lang="html">
<ViewContainer title="Lasputin" subtitle="Invoicing made shit">

  <div class="container-fill layout-column layout-center layout-align-center">
    <router-link :to="{name: 'Invoice'}">
      <h4 class="text-primary text-light">Invoices</h4>
    </router-link>
    <router-link :to="{name: 'Expenses'}">
      <h4 class="mt-2 text-primary text-light">Expenses</h4>
    </router-link>
    <router-link :to="{name: 'Travel'}">
      <h4 class="mt-2 text-primary text-light">Travel</h4>
    </router-link>
  </div>

</ViewContainer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
