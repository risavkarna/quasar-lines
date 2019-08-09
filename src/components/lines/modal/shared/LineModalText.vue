<template>
  <div class="row q-mb-xs">
    <div class="col">
      <q-input
        outlined
        @input="$emit('update:name', $event)"
        :value="name"
        ref="name"
        label="Content"
        autofocus
        :rules="[val => !!val || 'Field is required']"
      >
        <template v-slot:append>
          <q-icon 
            v-if="name"
            name="close"
            @click="$emit('update:name','')"
            class="cursor-pointer" />
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name']
};
</script>
<style>
</style>
