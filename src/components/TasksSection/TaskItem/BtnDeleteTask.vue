<script setup lang="ts">
import { ref } from 'vue'
import { TaskStore } from '../../../stores/Task'
import ModalConfirm from '../../Utilities/ModalConfirm.vue'
import Trash from '../../../assets/trash.svg'

const props = defineProps<{ taskId: string }>()

const taskStore = TaskStore()

const showModal = ref<boolean>(false)
function setShowModal(value: boolean): void {
  showModal.value = value
}
</script>
<template>
  <ModalConfirm
    v-if="showModal"
    :onClose="() => setShowModal(false)"
    text="This task will be deleted permanently."
    :onConfirm="taskStore.removeTask.bind(null, props.taskId)"
  />
  <button
    @click="() => setShowModal(true)"
    title="delete task"
    class="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200"
  >
    <Trash class="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
</template>
