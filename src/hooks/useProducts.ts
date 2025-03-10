import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getProducts } from '@/api/api-requests'

export function useProducts() {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    // select: (data) => data,
  })

  useEffect(() => {
    if (isError) {
      console.log(isError)
    }
  }, [isError])

  return { data, isLoading, isSuccess, isError, refetch }
}
