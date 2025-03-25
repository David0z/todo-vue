<script setup lang="ts">
import { MenuStore } from '../../stores/Menu'
import BtnAddTask from '../Utilities/BtnAddTask.vue'
import NavLinks from './NavLinks.vue'
import LayoutMenus from '../Utilities/LayoutMenus.vue'

const classLinkActive =
  'text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200'

const { menuHeaderOpened, closeMenuHeader } = MenuStore()
</script>
<template>
  <LayoutMenus :menuOpen="menuHeaderOpened" :closeMenuHandler="closeMenuHeader" className="left-0">
    <header className="h-full flex flex-col">
      <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
        To-do list
      </h1>
      <BtnAddTask class="my-8 mx-4" />
      <NavLinks :classActive="classLinkActive" />
    </header>
  </LayoutMenus>
</template>
