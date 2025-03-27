<script setup lang="ts">
import LayoutRoutes from '@/components/Utilities/LayoutRoutes.vue'
import useSearchQuery from '@/composables/useSearchQuery'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const searchQuery = ref<string>((route.query.q as string) ?? '')
const matchedTasks = useSearchQuery(searchQuery)

watch(
  () => route.query.q,
  (newSearchQuery) => {
    searchQuery.value = newSearchQuery as string
  },
)
</script>
<template>
  <LayoutRoutes title="Matched tasks" :tasks="matchedTasks"></LayoutRoutes>
</template>
