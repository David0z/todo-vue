<script setup lang="ts">
import { MenuStore } from '../../stores/Menu'
import BtnAddTask from '../Utilities/BtnAddTask.vue'
import LayoutMenus from '../Utilities/LayoutMenus.vue'

const { menuHeaderOpened, closeMenuHeader } = MenuStore()
</script>
<template>
  <LayoutMenus :menuOpen="menuHeaderOpened" :closeMenuHandler="closeMenuHeader" class="left-0">
    <header class="h-full flex flex-col">
      <h1 class="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
        To-do list
      </h1>
      <BtnAddTask class="my-8 mx-4" />
    </header>
  </LayoutMenus>
</template>
