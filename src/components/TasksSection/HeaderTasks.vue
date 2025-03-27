<script setup lang="ts">
import BtnAddTask from '../Utilities/BtnAddTask.vue'
import MenuIcon from '../../assets/menu.svg'
import Avatar from '../../assets/avatar-1.jpg'
import SearchField from './SearchField.vue'
import { MenuStore } from '../../stores/Menu'

const menuStore = MenuStore()

const date: Date = new Date()
const year: number = date.getFullYear()
const month: number = date.getMonth()
const day: number = date.getDate()

const monthName: string[] = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
]

const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day.toString().padStart(2, '0')}`

const dateTimeFormat = `${year}-${month.toString().padStart(2, '0')}-${day
  .toString()
  .padStart(2, '0')}}`
</script>
<template>
  <header class="items-center justify-between grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-2 md:flex">
    <button class="mr-6 block xl:hidden" @click="menuStore.openMenuHeader" title="otwórz menu">
      <MenuIcon />
    </button>
    <SearchField />
    <div class="text-center">
      <span class="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
        Lista Zadań
      </span>
      <time :dateTime="dateTimeFormat">{{ todayDate }}</time>
    </div>
    <div class="flex">
      <BtnAddTask
        class="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 dark:shadow-slate-900 sm:shadow-transparent"
      />

      <button @click="menuStore.openMenuAccount" class="block xl:hidden">
        <img :src="Avatar" alt="cat" class="w-10 h-10 rounded-full ml-4" />
      </button>
    </div>
  </header>
</template>
