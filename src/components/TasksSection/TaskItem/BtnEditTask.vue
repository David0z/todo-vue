<script setup lang="ts">
import { TaskStore } from '../../../stores/Task'
import ModalCreateTask from '../../Utilities/ModalTask.vue'
import OptionsSvg from '../../../assets/options.svg'
import type { Task } from '../../../types/task'
import { ref } from 'vue'

const props = defineProps<{ task: Task }>()
const taskStore = TaskStore()

const modalEditTaskOpen = ref<boolean>(false)

function setModalEditTaskOpen(value: boolean): void {
  modalEditTaskOpen.value = value
}
</script>
<template>
  <button
    title="edit task"
    class="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700"
    @click="setModalEditTaskOpen(true)"
  >
    <OptionsSvg class="w-4 sm:w-5 h-4 sm:h-5" />
  </button>
  <ModalCreateTask
    v-if="modalEditTaskOpen"
    :onClose="setModalEditTaskOpen.bind(null, false)"
    :task="props.task"
    nameForm="Edit task"
    :onConfirm="taskStore.editTask"
  />
</template>
