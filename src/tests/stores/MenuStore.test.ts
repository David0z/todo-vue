import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { MenuStore } from '../../stores/Menu'

describe('menuStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('openMenuHeader function should work properly', () => {
    const menuStore = MenuStore()
    menuStore.openMenuHeader()
    expect(menuStore.menuHeaderOpened).toBe(true)
  })

  it('closeMenuHeader function should work properly', () => {
    const menuStore = MenuStore()
    menuStore.openMenuHeader()
    menuStore.closeMenuHeader()
    expect(menuStore.menuHeaderOpened).toBe(false)
  })

  it('openMenuAccount function should work properly', () => {
    const menuStore = MenuStore()
    menuStore.openMenuAccount()
    expect(menuStore.menuAccountOpened).toBe(true)
  })

  it('closeMenuAccount function should work properly', () => {
    const menuStore = MenuStore()
    menuStore.openMenuAccount()
    menuStore.closeMenuAccount()
    expect(menuStore.menuAccountOpened).toBe(false)
  })
})
