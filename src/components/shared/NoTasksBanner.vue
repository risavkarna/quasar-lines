<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    <slot></slot>
    <template v-slot:action>
      <q-btn flat color="primary" @click="$root.$emit('showAddTask')" :label="label" />
    </template>
  </q-banner>
</template>
<script>
export default {
  props: ['label']
}
</script>
