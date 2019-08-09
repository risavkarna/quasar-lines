<template>
<div>
  <div v-if="hasIncompleteItems">
    <Banner bgColor="bg-blue-grey-13">Upcoming</Banner>
    <q-list separator bordered>
      <ParentLine
        v-for="(line, key) in coreIncompleteItems"
        :id="key"
        :key="key"
        :line-item="line"
      />
    </q-list>
  </div>
  <div v-else>
      <NoTasksBanner
        label="Add Task"
      >
      No //TODO items left!
      </NoTasksBanner>
  </div>
</div>
</template>
<script>
import ParentLine from 'components/lines/ParentLine.vue'
import Banner from 'components/shared/Banner.vue'
import NoTasksBanner from 'components/shared/NoTasksBanner.vue'

export default {
  props: ['coreIncompleteItems'],
  components: {
    ParentLine,
    Banner,
    NoTasksBanner
  },
  computed: {
    hasIncompleteItems() {
      return Object.keys(this.coreIncompleteItems).length
    }
  }
}
</script>
