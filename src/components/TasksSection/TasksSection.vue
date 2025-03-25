<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderTasks from './HeaderTasks.vue'
</script>
<template>
  <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
    <HeaderTasks />
    <RouterView />
  </main>
</template>
