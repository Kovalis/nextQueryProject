import { IProduct } from '@/app/types/catalog.interface'
import { QUERY_KEYS } from '@/const/queryKeys'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useMutationProducts = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.products],
    mutationFn: async (newPost: Omit<IProduct, 'id'>) => axios.post(`${process.env.API_URL}/posts`, newPost),
  })

  return { mutate, isPending }
}
