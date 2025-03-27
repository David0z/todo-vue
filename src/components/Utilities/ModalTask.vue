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

const today: Date = new Date(Date.now())
const day: number = today.getDate() < 10 ? +('0' + today.getDate()) : today.getDate()
const month: number =
  today.getMonth() + 1 < 10 ? +('0' + (today.getMonth() + 1)) : today.getMonth() + 1
const year: number = today.getFullYear()

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
        Tytuł
        <input type="text" class="w-full" placeholder="np. zrób zakupy" required v-model="title" />
      </label>
      <label>
        Data
        <input type="date" class="w-full" required v-model="date" :min="todayDate" :max="maxDate" />
      </label>
      <label>
        Opis (opcjonalnie)
        <textarea placeholder="np. zrób zakupy" class="w-full" v-model="description"></textarea>
      </label>
      <InputCheckbox
        :isChecked="isCompleted"
        :setChecked="setIsCompleted"
        label="Oznacz jako ukończone"
      />
      <button type="submit" class="btn mt-5">{{ props.nameForm }}</button>
    </form>
  </Modal>
</template>
