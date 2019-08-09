<template>
  <q-page class="q-pa-md">
    <IncompleteLines
      :coreIncompleteItems="coreIncompleteItems"
    />
    <CompletedLines
      :coreCompletedItems="coreCompletedItems"
    />
    <div class="absolute-bottom text-center q-ma-lg">
      <q-btn 
        @click="showAddModal = true"
        round
        color="primary"
        size="18px"
        icon="add"
      />  
    </div>
    <q-dialog v-model="showAddModal">
      <AddLine @close="showAddModal = false"/>
    </q-dialog>  
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex';


import AddLine from 'components/lines/modal/AddLine.vue'
import IncompleteLines from 'components/lines/IncompleteLines.vue'
import CompletedLines from 'components/lines/CompletedLines.vue'

export default {
  components: {
    AddLine,
    IncompleteLines,
    CompletedLines
  },
  data() {
    return {
      showAddModal: false
    }
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddModal = true
    })
  },
  computed: {
    ...mapGetters('linears', ['coreCompletedItems', 'coreIncompleteItems']),
  }
};
</script>
