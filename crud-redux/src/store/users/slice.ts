import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const DEFAULT_STATE = [
  {
    id: '1',
    name: 'Leanne Graham',
    email: 'LeanneG@gmail.com',
    github: 'LeanneGraham42',
  },
  {
    id: '2',
    name: 'Ervin Howell',
    email: 'Ervin_Howell@gmail.com',
    github: 'ErvinH',
  },
  {
    id: '3',
    name: 'Leandro Eraso',
    email: 'ClementineBauch@gmail.com',
    github: 'Leaeraso',
  },
  {
    id: '4',
    name: 'Patricia Lebsack',
    email: 'Pat.Lebsack@gmail.com',
    github: 'midudev',
  },
]

export type UserId = string
export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')

  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { id, ...action.payload }]
    },

    updateUser: (state, action: PayloadAction<UserWithId>) => {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      )
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      return state.filter((user) => user.id !== action.payload)
    },

    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadySaved = state.some((u) => u.id === action.payload.id)
      if (!isUserAlreadySaved) return [...state, action.payload]
    },
  },
})

export default usersSlice.reducer

export const { addNewUser, updateUser, deleteUserById, rollbackUser } =
  usersSlice.actions
