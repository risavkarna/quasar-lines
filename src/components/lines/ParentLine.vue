<template>
  <div>
    <q-item
      @click="updateParentLine(completedUpdate)"
      :class="lineItem.completed ? 'bg-grey-5' : ''"
      clickable
      v-ripple
    >
    <q-item-section side top>
      <q-checkbox 
        :value="lineItem.completed"
        @click.native="updateParentLine(completedUpdate)"
      />
    </q-item-section>

    <q-item-section :class="{ 'text-strikethrough': lineItem.completed }">
      <q-item-label>{{ lineItem.name }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center q-pr-xs">
          <q-icon name="event" size="18px" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{ lineItem.dueTime }}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ lineItem.dueDate | noCurrentYear}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn 
          @click.stop="showLineEditor = true"
          flat
          dense
          round
          color="primary"
          icon="edit"
        />
        <q-btn 
          @click.stop="promptToDelete(id)"
          flat
          dense
          round
          color="brown"
          icon="delete"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showLineEditor">
      <EditLine
        @close="showLineEditor = false"
        :current-item="lineItem"
        :id="id"
      />
    </q-dialog>  


    </q-item>
    <q-separator v-if="id"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import EditLine from 'components/lines/modal/EditLine.vue'

export default {
  props: ['lineItem', 'id'],

  components: {
    EditLine
  },
  data() {
    return {
      showLineEditor: false
    }
  },
  computed: {
    completedUpdate() {
      return {
        id: this.id, 
        updates: {
          completed: !this.lineItem.completed
        }
      }
    }
  },
  methods: {
    ...mapActions('linears', ['updateParentLine', 'deleteParentLine']),

    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm Delete',
        message: 'Would you like to delete this line?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => this.deleteParentLine(id))
    }
  },
  filters: {
    noCurrentYear(value) {
      if (value === null || value === undefined) {
        return value
      }
      const year = new Date().getFullYear()
      const delimiter = value[2]
      const dateNums = value.split(delimiter)
      return dateNums[2] === year.toString() 
        ? value.substring(0, value.lastIndexOf(delimiter)) 
        : value 
    }
  }

}
</script>

<style>
</style>
