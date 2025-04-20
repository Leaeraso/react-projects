import { deleteUserById, UserId } from '../store/users/slice'
import { useAppDispatch } from '../hooks/store'

export function useUsersActions() {
  const dispatch = useAppDispatch()

  const handleRemoveUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { handleRemoveUser }
}
