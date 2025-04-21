import { configureStore, Middleware } from '@reduxjs/toolkit'
import UsersReducer, { rollbackUser } from './users/slice.ts'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
  }

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action: any) => {
    next(action)
    const { type, payload } = action
    const prevState = store.getState()

    if (type === 'users/deleteUserById') {
      const userToDelete = prevState.users.find(
        (user: any) => user.id === payload
      )

      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (res.ok) toast.success(`User ${payload} deleted`)
        })
        .catch((err) => {
          toast.error(`User ${payload} not deleted`)
          if (userToDelete) {
            store.dispatch(rollbackUser(userToDelete))
          }
          console.error(err)
        })
    }
  }

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      persistanceLocalStorageMiddleware,
      syncWithDatabaseMiddleware
    )
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
