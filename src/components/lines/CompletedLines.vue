<template>
  <div v-if="hasCompletedItems" class="q-mt-md">
    <Banner bgColor="bg-grey">Completed</Banner>
    <q-list separator bordered>
      <ParentLine 
        v-for="(line, key) in coreCompletedItems"
        :id="key"
        :key="key"
        :line-item="line"
        />
    </q-list>
  </div>
</template>
<script>
import ParentLine from 'components/lines/ParentLine.vue'
import Banner from 'components/shared/Banner.vue'

export default {
  props: ['coreCompletedItems'],
  components: {
    ParentLine,
    Banner
  },
  computed: {
    hasCompletedItems() {
      return Object.keys(this.coreCompletedItems).length
    }
  }
}
</script>
