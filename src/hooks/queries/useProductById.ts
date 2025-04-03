import { useQuery } from '@tanstack/react-query'
import { IProduct } from '@/app/types/catalog.interface'
import axios from 'axios'
import { QUERY_KEYS } from '@/const/queryKeys'

const getProduct = (id: number) => {
  const res = axios.get<IProduct>(`${process.env.API_URL_PRODUCTS}/products/${id}`)

  return res
}

export function useProductById(id: number) {
  return useQuery({
    queryKey: [QUERY_KEYS.product, id],
    queryFn: () => getProduct(id),
    select: (data) => data.data,
  })
}
