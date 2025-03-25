<script setup lang="ts">
import BtnAddTask from '../Utilities/BtnAddTask.vue'
import MenuIcon from '../../assets/menu.svg'
import avatar1 from '../../assets/avatar-1.jpg'
// import SearchField from './SearchField'
import { MenuStore } from '../../stores/Menu'
// import Notification from './Notification'

const menuStore = MenuStore()

const date: Date = new Date()
const year: number = date.getFullYear()
const month: number = date.getMonth()
const day: number = date.getDate()

const monthName: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day.toString().padStart(2, '0')}`

const dateTimeFormat = `${year}-${month.toString().padStart(2, '0')}-${day
  .toString()
  .padStart(2, '0')}}`
</script>
<template>
  <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex ">
    <button className="mr-6 block xl:hidden" @click="menuStore.openMenuHeader" title="open menu">
      <MenuIcon />
    </button>
    <!-- <SearchField /> -->
    <div className="text-center">
      <span
        className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden"
      >
        To-do list
      </span>
      <time :dateTime="dateTimeFormat">{{ todayDate }}</time>
    </div>
    <div className="flex flex-1">
      <!-- <Notification /> -->
      <BtnAddTask
        className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent"
      />

      <button @click="menuStore.openMenuAccount" className="block xl:hidden">
        <img :src="avatar1" alt="cat" className="w-10 h-10 rounded-full ml-4" />
      </button>
    </div>
  </header>
</template>
