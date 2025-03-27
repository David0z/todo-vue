<script setup lang="ts">
import IconView1 from '../../assets/view-1.svg'
import IconView2 from '../../assets/view-2.svg'

const sortValues = [
  { value: 'min-date', title: 'Od najstarszych' },
  { value: 'max-date', title: 'Od najnowszych' },
]

const filterValues = [
  { value: 'completed', title: 'Ukończone' },
  { value: 'uncompleted', title: 'Nieukończone' },
]

const props = defineProps<{
  isListInView1: boolean
  sortedBy: string
  setSortedBy: (option: string) => void
  setIsListInView1: (status: boolean) => void
  filteredBy: string
  setFilteredBy: (option: string) => void
}>()
</script>
<template>
  <div class="sm:flex sm:justify-between">
    <div class="flex children-styles">
      <button @click="() => props.setIsListInView1(true)" title="wyświetl jako lista">
        <IconView1 :class="props.isListInView1 ? 'text-blue-600' : ''" />
      </button>
      <button @click="() => props.setIsListInView1(false)" title="wyświetl jako karty">
        <IconView2 :class="!props.isListInView1 ? 'text-blue-600' : ''" />
      </button>
    </div>
    <div class="flex gap-2">
      <select
        class="ml-auto inputStyles flex-1"
        :value="props.filteredBy"
        @change="({ target }) => props.setFilteredBy((target as HTMLSelectElement).value)"
      >
        <option value="">Filtruj</option>
        <option
          v-for="val in filterValues"
          :key="String(val.value)"
          :value="val.value"
          class="bg-slate-100 dark:bg-slate-800"
        >
          {{ val.title }}
        </option>
      </select>
      <select
        class="ml-auto inputStyles flex-1"
        :value="props.sortedBy"
        @change="({ target }) => props.setSortedBy((target as HTMLSelectElement).value)"
      >
        <option value="">Sortuj</option>
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
  </div>
</template>
