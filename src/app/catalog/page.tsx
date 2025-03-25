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
import { ModalAddProduct } from '@/widgets/ModalAddProduct'
import { ModalTemplate } from '@/widgets/ModalTemplate'

export const revalidate = 10

const Catalog = () => {
  const [sortProducts, setSortProduct] = useState<IProduct[] | null>(null)
  const [carts, setCarts] = useState<ICartsDate[] | null>(null)
  const [loader, setLoader] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)

  //обернуть в useCallback
  const { data, isLoading, refetch } = useProductsQuery()

  useEffect(() => {
    if (data) {
      setSortProduct(data)
    }
  }, [data])

  const refetchProducts = () => {
    refetch()
  }

  const handlerGetCarts = useCallback(() => getCarts(setLoader, setCarts), [])

  const queryClient = useQueryClient()

  const handleClick = useCallback(() => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.products] }), [])

  interface INewProduct {
    title?: string
    description?: string
    price?: number
  }

  const openModal = useCallback(() => {
    setVisibleModal(true)
  }, [])

  return (
    <div className={st.gridSidebar}>
      <Sidebar />

      <div className={st.page}>
        <div className={st.catalogTop}>
          <h1>Catalog</h1>
          <select
            name="sortOptions"
            id="sortOptions"
            onChange={(e) => {
              if (data) {
                handlerSort(e, data, setSortProduct)
              }
            }}
          >
            <option value="1">По популярности</option>
            <option value="2">Сначала дешевые</option>
          </select>
        </div>

        <div>
          <ButtonBase onClick={handlerGetCarts}>Отобразить даты</ButtonBase>

          <ButtonBase onClick={openModal}>Записать данные(useMutation)</ButtonBase>

          {loader && <Loader />}

          <div>
            <ButtonBase onClick={refetchProducts}>Обновить товары(refetch)</ButtonBase>
            <ButtonBase onClick={handleClick}>Обновить товары(invalidateQueries)</ButtonBase>
          </div>

          <div className={st.mb20}>
            {loader && <Loader />}
            {carts &&
              carts.map((cart: ICartsDate) => {
                return <div key={cart.id}>{cart.date}</div>
              })}
          </div>
        </div>

        {sortProducts?.length ? (
          <div className={st.catalogList}>
            {sortProducts?.map((product) => (
              <CardProduct key={product?.id} product={product} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
        {visibleModal && (
          <ModalTemplate visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
            <ModalAddProduct />
          </ModalTemplate>
        )}
      </div>
    </div>
  )
}

export default Catalog
