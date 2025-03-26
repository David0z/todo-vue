<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { Task } from '../../types/task'
import InputCheckbox from '../Utilities/InputCheckbox.vue'
import Modal from './ModalElement.vue'

const props = defineProps<{
  onClose: () => void
  task?: Task
  nameForm: string
  onConfirm: (task: Task) => void
}>()

const today: Date = new Date()
let day: number = today.getDate()
let month: number = today.getMonth() + 1
const year: number = today.getFullYear()
if (day < 10) {
  day = +('0' + day)
}
if (month < 10) {
  month = +('0' + month)
}

const todayDate: string = year + '-' + month + '-' + day
const maxDate: string = year + 1 + '-' + month + '-' + day

const description = ref<string>(props.task?.description ?? '')
const title = ref<string>(props.task?.title ?? '')
const date = ref<string>(props.task?.date ?? todayDate)
const isCompleted = ref<boolean>(props.task?.completed ?? false)

function setIsCompleted(value: boolean): void {
  isCompleted.value = value
}

const isTitleValid = ref<boolean>(false)
const isDateValid = ref<boolean>(false)

function addNewTaskHandler(): void {
  isTitleValid.value = title.value.trim().length > 0
  isDateValid.value = date.value.trim().length > 0

  if (isTitleValid.value && isDateValid.value) {
    const newTask: Task = {
      title: title.value,
      description: description.value,
      date: date.value,
      completed: isCompleted.value,
      id: props.task?.id ? props.task.id : Date.now().toString(),
    }
    props.onConfirm(newTask)
    props.onClose()
  }
}
</script>
<template>
  <Modal :onClose="props.onClose" :title="props.nameForm">
    <form class="flex flex-col stylesInputsField" @submit.prevent="addNewTaskHandler">
      <label>
        Title
        <input type="text" placeholder="e.g, study for the test" required v-model="title" />
      </label>
      <label>
        Date
        <input type="date" class="w-full" required v-model="date" :min="todayDate" :max="maxDate" />
      </label>
      <label>
        Description (optional)
        <textarea
          placeholder="e.g, study for the test"
          class="w-full"
          v-model="description"
        ></textarea>
      </label>
      <InputCheckbox
        :isChecked="isCompleted"
        :setChecked="setIsCompleted"
        label="Mark as completed"
      />
      <button type="submit" class="btn mt-5">{{ props.nameForm }}</button>
    </form>
  </Modal>
</template>
