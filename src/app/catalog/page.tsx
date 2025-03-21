'use client'
// import Image from 'next/image'
import st from '@/app/page.module.scss'
import { EventHandler, useCallback, useEffect, useState } from 'react'
import { IProduct } from '../types/catalog.interface'
import Loader from '../../shared/Loader'
import Sidebar from '../../widgets/Sidebar/sidebar'
import CardProduct from '../../widgets/CardProduct'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { useProductsQuery } from '../../hooks/queries/useProducts'
import ButtonBase from '../../shared/ButtonBase'
import { ICartsDate } from '../types/cartsDate.interface'
import { getCarts, handlerSort } from './scripts'
import { QUERY_KEYS } from '@/const/queryKeys'
import { useMutationProducts } from '@/hooks/queries/useMutationProducts'

export const revalidate = 10

const Catalog = () => {
  const [sortProducts, setSortProduct] = useState<IProduct[] | null>(null)
  const [carts, setCarts] = useState<ICartsDate[] | null>(null)
  const [loader, setLoader] = useState(false)

  //обернуть в useCallback
  const { data, isLoading, refetch } = useProductsQuery()

  const refetchProducts = () => {
    refetch()
  }

  const handlerGetCarts = useCallback(() => getCarts(setLoader, setCarts), [])

  const queryClient = useQueryClient()

  const handleClick = useCallback(() => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.products] }), [])

  // const { mutate, isPending } = useMutation({
  //   mutationKey: [QUERY_KEYS.products],
  //   mutationFn: async (newPost: Omit<IProduct, 'id'>) => axios.post(`${process.env.API_URL}/posts`, newPost),
  // })

  const { newPost, mutate, isPending } = useMutationProducts()

  const handlerMutate = () => {
    mutate(newPost)
  }

  return (
    <div className={st.gridSidebar}>
      <Sidebar />

      <div className={st.page}>
        <div className={st.catalogTop}>
          <h1>Catalog</h1>
          <select name="" id="" onChange={() => handlerSort}>
            <option value="1">По популярности</option>
            <option value="2">Сначала дешевые</option>
          </select>
        </div>

        <div>
          <ButtonBase onClick={handlerGetCarts}>Отобразить даты</ButtonBase>

          <ButtonBase onClick={handlerMutate}>Записать данные(useMutation)</ButtonBase>

          {isPending && <Loader />}

          <div>
            <ButtonBase onClick={refetchProducts}>Обновить товары(refetch)</ButtonBase>
            <ButtonBase onClick={handleClick}>Обновить товары(invalidateQueries)</ButtonBase>
          </div>

          <div className={st.mb20}>
            {loader && <Loader />}
            {!carts
              ? null
              : carts.map((cart: ICartsDate) => {
                  return <div key={cart.id}>{cart.date}</div>
                })}
          </div>
        </div>

        {data?.length ? (
          <div className={st.catalogList}>
            {data?.map((product) => (
              <CardProduct key={product?.id} product={product} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Catalog
