import { IProduct } from '@/app/types/catalog.interface'
import { QUERY_KEYS } from '@/const/queryKeys'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface INewProduct {
  title?: string
  description?: string
  price?: string
}

export const useMutationProducts = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.products],
    mutationFn: async (newPost: INewProduct) => axios.post(`${process.env.API_URL}/posts`, newPost),
  })
}
