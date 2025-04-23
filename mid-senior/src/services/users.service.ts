import { QueryFunctionContext } from '@tanstack/react-query'

const RANDOM_USERS_URL = 'https://randomuser.me/api?results=10&seed=l1000'

export async function fetchUsers({ pageParam = 1 }: QueryFunctionContext) {
  const res = await fetch(`${RANDOM_USERS_URL}&page=${pageParam}`)
  const data = await res.json()

  const currentPage = Number(data.info.page)
  return {
    users: data.results,
    nextCursor: currentPage > 2 ? undefined : currentPage + 1,
  }
}
