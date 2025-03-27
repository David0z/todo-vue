import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export default function useVisibility(
  elements: Ref<HTMLElement | undefined>[],
  fnClose?: () => void,
) {
  const elementIsVisible = ref<boolean>(false)

  const checkClick = (e: MouseEvent) => {
    if (!elements) return

    const clickedOutsideElement = elements.every((element) => {
      if (!element.value) return false
      if (e.target !== element.value && !element.value.contains(e.target as HTMLElement)) {
        return true
      }
      return false
    })

    if (clickedOutsideElement) {
      elementIsVisible.value = false
      if (fnClose) fnClose()
    }
  }

  onMounted(() => {
    document.addEventListener('click', checkClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', checkClick)
  })

  function closeElement() {
    elementIsVisible.value = false
  }

  function showElement() {
    elementIsVisible.value = true
  }

  return { elementIsVisible, closeElement, showElement }
}
