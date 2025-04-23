import { fetchUsers } from '../services/users.service'
import { useInfiniteQuery } from '@tanstack/react-query'
import { User } from '../types'
export function useUsers() {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery<{
      users: User[]
      nextCursor?: number
    }>({
      queryKey: ['users'],
      queryFn: fetchUsers,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    })

  return {
    isLoading,
    isError,
    users: data?.pages?.flatMap((page) => page.users) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage,
  }
}
