<script setup lang="ts">
import Avatar from '../../assets/avatar-1.jpg'
import { MenuStore } from '../../stores/Menu'
import LayoutMenus from '../Utilities/LayoutMenus.vue'
import DarkMode from './DarkMode.vue'
import DeleteTasks from './DeleteTasks.vue'

const menusStore = MenuStore()
</script>
<template>
  <LayoutMenus
    :menuOpen="menusStore.menuAccountOpened"
    :closeMenuHandler="menusStore.closeMenuAccount"
    class="top-0 right-0"
  >
    <section class="p-5 flex flex-col h-full">
      <span class="flex items-center mx-auto">
        <span class="font-medium">Witaj, Użytkowniku!</span>
        <img :src="Avatar" class="w-10 rounded-full ml-4" />
      </span>

      <DarkMode />

      <DeleteTasks />
    </section>
  </LayoutMenus>
</template>
