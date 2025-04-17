'use client'
// import Image from 'next/image'
import st from '@/app/page.module.scss'
import { EventHandler, useCallback, useEffect, useState } from 'react'
import { IProduct } from '../types/catalog.interface'
import Loader from '../../shared/Loader'
import Sidebar from '../../widgets/Sidebar/sidebar'
import CardProduct from '../../widgets/CardProduct'
import { useProductsQuery } from '../../hooks/queries/useProducts'
import ButtonBase from '../../shared/ButtonBase'
import { ICartsDate } from '../types/cartsDate.interface'
import { getCarts, handlerSort } from './scripts'
import { ModalAddProduct } from '@/widgets/ModalAddProduct'
import { ModalTemplate } from '@/widgets/ModalTemplate'
import { useProducts } from './store'

const Catalog = () => {
  const stateProducts = useProducts((state: any) => state.products)
  const stateSetProducts = useProducts((state: any) => state.setProducts)

  const [carts, setCarts] = useState<ICartsDate[] | null>(null)
  const [loader, setLoader] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)

  //обернуть в useCallback
  const { data, refetch } = useProductsQuery()

  useEffect(() => {
    if (data) {
      stateSetProducts(data)
      console.log('first loading')
    }
  }, [data])

  const refetchProducts = () => {
    refetch()
  }

  const handlerGetCarts = useCallback(() => getCarts(setLoader, setCarts), [])

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
                handlerSort(e, data, stateSetProducts)
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
          </div>

          <div className={st.mb20}>
            {loader && <Loader />}
            {carts &&
              carts.map((cart: ICartsDate) => {
                return <div key={cart.id}>{cart.date}</div>
              })}
          </div>
        </div>

        {stateProducts?.length ? (
          <div className={st.catalogList}>
            {stateProducts?.map((product) => (
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
