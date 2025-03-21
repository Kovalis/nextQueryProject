import { IProduct } from '@/app/types/catalog.interface'
import { QUERY_KEYS } from '@/const/queryKeys'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useMutationProducts = () => {
  const newPost = {
    category: 'shoes',
    description: 'any product',
    image: 'anything img',
    price: 3233,
    rating: {
      count: 2,
      rate: 5,
    },
    title: 'some title',
  }

  const { mutate, isPending } = useMutation({
    mutationKey: [QUERY_KEYS.products],
    mutationFn: async (newPost: Omit<IProduct, 'id'>) => axios.post(`${process.env.API_URL}/posts`, newPost),
  })

  return { newPost, mutate, isPending }
}
