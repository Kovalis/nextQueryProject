import { IProduct } from '@/app/types/catalog.interface'
import axios from 'axios'

export async function getProducts(): Promise<IProduct[]> {
  try {
    const res = await axios.get<IProduct[]>(`${process.env.API_URL_PRODUCTS}/products`)
    return res.data
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error)
    throw error
  }
}
