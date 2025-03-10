'use client'

import axiosFetch, { FetchResponse } from '@adraheem/axios-next'
import styles from '../../page.module.scss'
import { FC, useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Loader from '@/shared/loader'
import { IProduct } from '../../types/catalog.interface'
import { useProductById } from '@/hooks/useProductById'
import Button from '@/shared/button'

const CatalogItem: FC = () => {
  const pathName = useParams()
  const router = useRouter()

  const { data, isLoading, isSuccess, isError } = useProductById(Number(pathName.slug))

  return (
    <div className={styles.page}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={styles.h1}>{data.title}</h1>
          <div className={styles['product-item']}>
            <div className={styles['product-item__img-wrap']}>
              <img src={data.image} alt="" width="500" height="600" className={styles['product-item__img']} />
            </div>
            <div>{data.description}</div>
            <div className={styles['product-item__bottom']}>
              <span className={styles['purple-color']}>{data.price} ₽</span>
            </div>
          </div>
        </>
      )}

      <Button onClick={() => router.push('/catalog')} text={'Back'} />
    </div>
  )
}

export default CatalogItem
