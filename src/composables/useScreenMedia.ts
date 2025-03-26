import { ref, onMounted, onUnmounted } from 'vue'

interface Query {
  [key: string]: boolean
}

export function useScreenMedia() {
  const mediaQueries = ref<Query>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  function setNewMediaValues(size?: string) {
    const prevStateCopy = { ...mediaQueries.value }

    for (const key in prevStateCopy) {
      prevStateCopy[key] = false
    }

    if (size) {
      mediaQueries.value = { ...prevStateCopy, [size]: true }
      return
    }

    mediaQueries.value = { ...prevStateCopy }
  }

  function checkMediaSize() {
    if (window.innerWidth >= 1280) {
      setNewMediaValues('xl')
    } else if (window.innerWidth >= 1024) {
      setNewMediaValues('lg')
    } else if (window.innerWidth >= 768) {
      setNewMediaValues('md')
    } else if (window.innerWidth >= 640) {
      setNewMediaValues('sm')
    } else if (window.innerWidth > 0) {
      setNewMediaValues()
    }
  }

  onMounted(() => {
    checkMediaSize()
    window.addEventListener('resize', checkMediaSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMediaSize)
  })

  return { mediaQueries }
}
