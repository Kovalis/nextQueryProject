import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { IProduct } from '@/app/types/catalog.interface'
import axios from 'axios'

const getProduct = (id: number) => {
  const res = axios.get<IProduct>(`${process.env.API_URL}/products/${id}`)

  return res
}

export function useProductById(id: number) {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    select: (data) => data.data,
  })

  useEffect(() => {
    if (isError) {
      console.log(isError)
    }
  }, [isError])

  return { data, isLoading, isSuccess, isError }
}
