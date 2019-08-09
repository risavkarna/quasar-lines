<template>
  <div class="row q-mb-xs">
    <q-input
      outlined
      :value="dueDate"
      label="Date"
      @input="$emit('update:dueDate', $event)"
      mask="##/##/####"
    >
      <template v-slot:append>
        <q-icon v-if="dueDate" name="close" @click="$emit('dateClear')" class="cursor-pointer" />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
                mask="DD/MM/YYYY"
                :value="dueDate"
                @input="dateInputHandler($event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
export default {
  props: ['dueDate'],
  methods: {
    dateInputHandler(e) {
      this.$emit('update:dueDate', e);
      this.$refs.qDateProxy.hide();
    }
  }
};
</script>
