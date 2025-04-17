import { create } from 'zustand'
import { IProduct } from '../types/catalog.interface'

export const useProducts = create((set, get) => ({
  products: [],
  getProducts: (state: any) => state.products,
  // getProducts: (state) =>
  //   set({
  //     products: get().products,
  //   }),
  setProducts: (products: IProduct[]) =>
    set((state: any) => {
      return { products }
    }),
  filterNameProducts: (name: string) =>
    set((state: any) => {
      const filterNameArr = state.products.filter((item: IProduct) => item?.title?.includes(name))
      return { filterNameArr }
    }),
}))
