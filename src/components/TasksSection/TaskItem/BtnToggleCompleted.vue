<script setup lang="ts">
import { TaskStore } from '../../../stores/Task'
import SvgX from '../../../assets/x.svg'
import Check from '../../../assets/check.svg'

const props = defineProps<{
  taskCompleted: boolean
  taskId: string
  isListInView1: boolean
}>()

const taskStore = TaskStore()
</script>
<template>
  <button
    :title="props.taskCompleted ? 'oznacz jako nieukończone' : 'oznacz jako ukończone'"
    :class="`${
      props.taskCompleted ? 'bg-emerald-200 text-emerald-800 ' : 'bg-amber-200 text-amber-800 '
    } ${props.isListInView1 ? 'mr-4' : 'mr-4 order-0'} rounded-full font-medium`"
    @click="taskStore.toggleTaskCompleted(props.taskId)"
  >
    <span class="block py-1 px-3 absolute invisible sm:static sm:visible">
      {{ props.taskCompleted ? 'ukończone' : 'nieukończone' }}
    </span>
    <span class="sm:hidden w-6 h-6 grid place-items-center">
      <Check class="w-3 h-3" v-if="props.taskCompleted" />
      <SvgX class="w-3 h-3" v-else />
    </span>
  </button>
</template>
