import { atom } from 'recoil'

export const currentTown = atom({
  key: 'currentTown',
  default: '흑석동',
})

export const store = atom({
  key: 'store',
  default: { id: '', name: '' },
})

export const user = atom({
  key: 'user',
  default: { uniqueName: '', jwt: '' },
})
