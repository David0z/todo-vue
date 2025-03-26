<script setup lang="ts">
import IconView1 from '../../assets/view-1.svg'
import IconView2 from '../../assets/view-2.svg'

const sortValues = [
  { value: 'min-date', title: 'Earlier first' },
  { value: 'max-date', title: 'Later first' },
]

const props = defineProps<{
  isListInView1: boolean
  sortedBy: string
  setSortedBy: (option: string) => void
  setIsListInView1: (status: boolean) => void
}>()
</script>
<template>
  <div class="flex children-styles">
    <button @click="() => props.setIsListInView1(true)" title="view in list">
      <IconView1 :class="props.isListInView1 ? 'text-violet-600' : ''" />
    </button>
    <button @click="() => props.setIsListInView1(false)" title="view in grid">
      <IconView2 :class="!props.isListInView1 ? 'text-violet-600' : ''" />
    </button>
    <select
      class="ml-auto inputStyles"
      :value="props.sortedBy"
      @change="({ target }) => props.setSortedBy((target as HTMLSelectElement).value)"
    >
      <option value="" disabled>Sort by</option>
      <option
        v-for="val in sortValues"
        :key="val.value"
        :value="val.value"
        class="bg-slate-100 dark:bg-slate-800"
      >
        {{ val.title }}
      </option>
    </select>
  </div>
</template>
