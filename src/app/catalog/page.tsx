'use client'
// import Image from 'next/image'
import styles from '@/app/page.module.scss'
import { EventHandler, FC, useEffect, useState } from 'react'
import { IProduct } from '../types/catalog.interface'
import Loader from '../../shared/loader'
import Sidebar from '../../widgets/sidebar'
import CardProduct from '../../widgets/card-product/card-product'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { useProducts } from '../../hooks/useProducts'
import axios from 'axios'
import Button from '@/shared/button'
// import { getCarts, handlerSort } from '../others-js'

const Catalog: FC = () => {
  interface IProductCart {
    productId: number
    quantity: number
  }

  interface ICarts {
    id: number
    userId: number
    date: string
    product: IProductCart[]
    __v: number
  }

  // const [sortProducts, setSortProduct] = useState<IProduct[] | null>(null)
  const [carts, setCarts] = useState<ICarts[] | null>(null)
  const [loader, setLoader] = useState(false)

  const sortByRating = (a, b): number => {
    if (a.rating.rate > b.rating.rate) {
      return -1
    } else if (a.rating.rate === b.rating.rate) {
      return 0
    } else {
      return 1
    }
  }

  const sortByPrice = (a, b): number => {
    if (a.price > b.price) {
      return 1
    } else if (a.price === b.price) {
      return 0
    } else {
      return -1
    }
  }

  const { data, isLoading, refetch } = useProducts()

  const refetchProducts = () => {
    refetch()
  }

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['products'],
    mutationFn: async (newPost: Omit<IProduct, 'id'>) =>
      axios.post('https://jsonplaceholder.typicode.com/posts', newPost),
  })

  const handlerMutate = () => {
    mutate({
      category: 'shoes',
      description: 'any product',
      image: 'anything img',
      price: 3233,
      rating: {
        count: 2,
        rate: 5,
      },
      title: 'some title',
    })
  }

  return (
    <div className={styles['grid-sidebar']}>
      <Sidebar />
      <div className={styles.page}>
        <div className={styles['catalog-top']}>
          <h1>Catalog</h1>
          {/* <select name="" id="" onChange={handlerSort}>
            <option value="1">По популярности</option>
            <option value="2">Сначала дешевые</option>
          </select> */}
        </div>
        <div>
          {/* <button onClick={getCarts}>Отобразить даты</button> */}

          <Button onClick={handlerMutate} text={'Записать данные(useMutation)'} />
          {isPending ? <Loader /> : ''}
          <div>
            <Button onClick={refetchProducts} text={'Обновить товары(refetch)'} />
            <Button
              onClick={() => queryClient.invalidateQueries({ queryKey: ['products'] })}
              text={'Обновить товары(invalidateQueries)'}
            />
          </div>
          <div className={styles.mb20}>
            {loader ?? <Loader />}
            {!carts
              ? null
              : carts.map((cart: ICarts) => {
                  return <div key={cart.id}>{cart.date}</div>
                })}
          </div>
        </div>
        {data ? (
          <div className={styles['catalog-list']}>
            {isLoading ? (
              <Loader />
            ) : (
              data?.map((product: IProduct, index) => <CardProduct key={index} product={product} />)
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Catalog
