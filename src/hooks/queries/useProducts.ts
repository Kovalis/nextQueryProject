import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getProducts } from '@/api/api-requests'
import { QUERY_KEYS } from '@/const/queryKeys'

export function useProductsQuery() {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: [QUERY_KEYS.products],
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
