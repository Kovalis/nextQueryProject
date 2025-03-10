import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPassangers } from '@/api/api-passangers'

export function usePassangers(page: number = 0) {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ['passangers', page],
    queryFn: () => getPassangers(page),
    select: (data) => data.data,
  })

  useEffect(() => {
    if (isError) {
      console.log(isError)
    }
  }, [isError])

  return { data, isLoading, isSuccess, isError, refetch }
}
