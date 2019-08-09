<template>
  <div>
    <q-card-section class="row">
      <div class="text-h6">
        <slot></slot>
      </div>
      <q-space />
      <q-btn v-close-popup flat dense round color="grey" icon="close" />
    </q-card-section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
