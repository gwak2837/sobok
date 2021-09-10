import { atom } from 'recoil'

export const currentTown = atom({
  key: 'currentTown',
  default: '흑석동',
})

export const currentStore = atom({
  key: 'currentStore',
  default: { id: '', name: '' },
})

export const currentUser = atom({
  key: 'currentUser',
  default: { uniqueName: '', jwt: '' },
})
