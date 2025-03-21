import { IPassanger } from '../app/types/passangers.interface'
import axios from 'axios'

export async function getPassangers(page: number) {
  const perPage = 10
  // Формируем URL, добавив информацию о странице если она передана
  const apiUrl = `${process.env.API_URL}/comments?_page=${page}&_limit=${perPage}`

  try {
    // Получаем данные и возвращаем только сам массив данных
    const response = await axios.get<IPassanger[]>(apiUrl)

    return response
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
