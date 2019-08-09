<template>
  <div>
    <q-card>
      <LineModalHeader>Edit Item</LineModalHeader>
      <form @submit.prevent="submitForm">
        <q-card-section>
          <LineModalText 
            :name.sync="lineToAdd.name"
            ref="modalText"
          />
          <LineModalDate
            :dueDate.sync="lineToAdd.dueDate"
            @dateClear="clearDateTime"
          />
          <LineModalTime
            v-if="lineToAdd.dueDate"
            :dueTime.sync="lineToAdd.dueTime"
          />

        </q-card-section>

        <LineModalSave />

      </form>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import LineModalHeader from 'components/lines/modal/shared/LineModalHeader.vue'
import LineModalText from 'components/lines/modal/shared/LineModalText.vue'
import LineModalDate from 'components/lines/modal/shared/LineModalDate.vue'
import LineModalTime from 'components/lines/modal/shared/LineModalTime.vue'
import LineModalSave from 'components/lines/modal/shared/LineModalSave.vue'

export default {
  components: {
    LineModalHeader,
    LineModalText,
    LineModalDate,
    LineModalTime,
    LineModalSave
  },
  props: ['currentItem', 'id'],
  data() {
    return {
      lineToAdd: {}
    }
  },
  methods: {
    ...mapActions('linears', ['updateParentLine']),
    clearDateTime() {
      this.lineToAdd.dueDate = '';
      this.lineToAdd.dueTime = '';
    },
    submitForm() {
      const { name } = this.$refs.modalText.$refs;
      name.validate();
      if (!name.hasError) {
        this.submitLineItem();
      }
    },
    submitLineItem() {
      this.updateParentLine({
        id: this.id,
        updates: this.lineToAdd
      });
      this.$emit('close');
    }
  },
  mounted() {
    this.lineToAdd = Object.assign({}, this.currentItem)
  }
}
</script>

<style>
</style>
