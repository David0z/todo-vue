<script setup lang="ts">
const props = defineProps<{
  label: string
  isChecked: boolean
  setChecked: (value: boolean) => void
}>()
</script>
<template>
  <label class="mb-0 flex items-center cursor-pointer">
    <div
      class="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700"
    >
      <span v-if="props.isChecked" class="bg-rose-500 w-2 h-2 block rounded-full"></span>
    </div>
    <span class="order-1 flex-1">{{ props.label }}</span>
    <input
      type="checkbox"
      class="sr-only"
      :checked="props.isChecked"
      @change="props.setChecked(!props.isChecked)"
    />
  </label>
</template>
