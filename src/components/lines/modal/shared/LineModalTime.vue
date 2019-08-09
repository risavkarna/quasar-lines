<template>
  <div class="row q-mb-xs">
    <div class="col">
      <q-input
        outlined
        :value="dueTime"
        label="Time"
        mask="time"
        @input="$emit('update:dueTime', $event)"
      >
        <template v-slot:append>
          <q-icon v-if="dueTime"
            name="close"
            @click="$emit('update:dueTime', '')"
            class="cursor-pointer"
            />
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy ref="qTimeProxy" transition-show="scale" transition-hide="scale">
              <q-time 
                    :value="dueTime"
                    @input="timeInputHandler($event)"
                />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dueTime: String,
    dueDate: String
  },
  methods: {
    timeInputHandler(e) {
      this.$emit('update:dueTime', e)
      this.$refs.qTimeProxy.hide()
    }
  }
}
</script>
