import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/api-requests'
import { QUERY_KEYS } from '@/const/queryKeys'

export function useProductsQuery() {
  return useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: getProducts,
  })
}
