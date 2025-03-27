import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { ModalStore } from '../../stores/Modal'

describe('modalStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('openModal function should work properly', () => {
    const modalStore = ModalStore()
    modalStore.openModalCreateTask()
    expect(modalStore.modalCreateTaskOpen).toBe(true)
  })

  it('closeModal function should work properly', () => {
    const modalStore = ModalStore()
    modalStore.openModalCreateTask()
    modalStore.closeModalCreateTask()
    expect(modalStore.modalCreateTaskOpen).toBe(false)
  })
})
