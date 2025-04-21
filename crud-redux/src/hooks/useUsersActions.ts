import {
  addNewUser,
  updateUser,
  deleteUserById,
  User,
  UserId,
  UserWithId,
} from '../store/users/slice'
import { useAppDispatch } from '../hooks/store'

export function useUsersActions() {
  const dispatch = useAppDispatch()

  const handleAddUser = (user: User) => {
    dispatch(addNewUser(user))
  }

  const handleUpdateUser = (user: UserWithId) => {
    dispatch(updateUser(user))
  }

  const handleRemoveUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { handleAddUser, handleUpdateUser, handleRemoveUser }
}
