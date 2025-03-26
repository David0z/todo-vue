<script setup lang="ts">
import { useScreenMedia } from '../../composables/useScreenMedia'
const props = defineProps<{
  menuOpen: boolean
  closeMenuHandler: () => void
}>()

const screenMedia = useScreenMedia()
const { mediaQueries } = screenMedia
</script>
<template>
  <div
    :class="`bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20 ${$attrs.class} ${props.menuOpen || mediaQueries.xl ? 'block' : 'hidden'}`"
  >
    <slot></slot>
  </div>
  <div
    v-if="menuOpen && !mediaQueries.xl"
    className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
    @click="props.closeMenuHandler"
  ></div>
</template>
