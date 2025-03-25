<script setup lang="ts">
// import AccountData from './components/AccountSection/AccountData.vue'
import Footer from './components/Footer.vue'
import MainMenu from './components/Menu/MainMenu.vue'
import TasksSection from './components/TasksSection/TasksSection.vue'
import ModalCreateTask from './components/Utilities/ModalTask'
import { ModalStore } from './stores/Modal'
import { TaskStore } from './stores/Task'

const modalStore = ModalStore()
const taskStore = TaskStore()
</script>

<template>
  <div
    class="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs"
  >
    <ModalCreateTask
      v-if="modalStore.modalCreateTaskOpen"
      :onClose="modalStore.closeModalCreateTask"
      nameForm="Add a task"
      :onConfirm="taskStore.addNewTask"
    />
    <MainMenu />
    <TasksSection />
    <Footer />
    <AccountData />
  </div>
</template>
