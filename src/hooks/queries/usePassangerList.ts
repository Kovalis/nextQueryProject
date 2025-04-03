import { useQuery } from '@tanstack/react-query'
import { getPassangers } from '@/api/api-passangers'
import { QUERY_KEYS } from '@/const/queryKeys'

export function usePassangers(page: number = 0) {
  return useQuery({
    queryKey: [QUERY_KEYS.passangers, page],
    queryFn: () => getPassangers(page),
    select: (data) => data?.data,
  })
}
