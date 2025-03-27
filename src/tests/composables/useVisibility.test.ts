import { describe, it, expect } from 'vitest'
import useVisibility from '../../composables/useVisibility'
import { ref } from 'vue'

describe('useVisibility composable', () => {
  it('showElement function should work properly', () => {
    const elementRef = ref<HTMLElement>()
    const { showElement, elementIsVisible } = useVisibility([elementRef])
    showElement()
    expect(elementIsVisible.value).toBe(true)
  })

  it('closeElement function should work properly', () => {
    const elementRef = ref<HTMLElement>()
    const { closeElement, elementIsVisible } = useVisibility([elementRef])
    closeElement()
    expect(elementIsVisible.value).toBe(false)
  })
})
