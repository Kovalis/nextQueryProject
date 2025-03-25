import axios from 'axios'
import { ICartsDate } from '../types/cartsDate.interface'
import { IProduct, SelectChangeEvent } from '../types/catalog.interface'

export const sortByRating = (a: IProduct, b: IProduct): number => {
  if ((a.rating?.rate || 0) > (b.rating?.rate || 0)) {
    return -1
  } else if ((a.rating?.rate || 0) === (b.rating?.rate || 0)) {
    return 0
  } else {
    return 1
  }
}

export const sortByPrice = (a: IProduct, b: IProduct): number => {
  if ((a.price || 0) > (b.price || 0)) {
    return -1
  } else if (a.price === b.price) {
    return 0
  } else {
    return 1
  }
}

const handlerSortRating = (sortProducts: IProduct[]) => {
  return sortProducts.slice().sort(sortByRating)
}

const handlerSortPrice = (sortProducts: IProduct[]) => {
  return sortProducts.slice().sort(sortByPrice)
}

export const handlerSort = (
  typeSort: SelectChangeEvent,
  sortProducts: IProduct[],
  setSortProduct: (value: IProduct[]) => void
): void => {
  if (!sortProducts) return

  let sortedProducts

  if (typeSort.target.value === '1') {
    const productsWithRating = sortProducts.filter((element) => element.rating && element.rating.rate)
    sortedProducts = handlerSortRating(productsWithRating)
  } else {
    const productsWithPrice = sortProducts.filter((element) => element.price)
    sortedProducts = handlerSortPrice(productsWithPrice)
  }
  setSortProduct(sortedProducts)
}

export const getCarts = async (
  setLoader: (value: boolean) => void,
  setCarts: (value: ICartsDate[]) => void
): Promise<void> => {
  setLoader(true)
  try {
    const { data } = await axios.get<ICartsDate[]>(`${process.env.API_URL_PRODUCTS}/carts?limit=5`)
    if (data && data.length > 0) {
      setCarts(data)
    }
  } catch (error) {
    console.error('Error fetching carts:', error)
    // Можно установить состояние ошибки или другие действия
  } finally {
    setLoader(false)
  }
}
