import { IProduct } from '@/app/types/catalog.interface'
import styles from '@/app/page.module.scss'
import Link from 'next/link'
import ProductPrice from '@/shared/price-product'
import ShowMore from '@/shared/show-more'
import ProductRating from '@/shared/rating'

interface ICartProduct {
  product: IProduct
}

const CardProduct = ({ product }: ICartProduct) => {
  return (
    <div className={styles['catalog-list__item']}>
      <Link href={`/catalog/${product.id}`} className={styles['catalog-list__img-wrap']}>
        <img src={product.image} alt="" className={styles['catalog-list__img']} />
      </Link>
      <ProductRating productRating={product.rating.rate} />
      <h2 className={styles['catalog-list__item-title']}>{product.title}</h2>
      <div>{product.description}</div>
      <div className={styles['catalog-list__item-bottom']}>
        <ProductPrice productPrice={product.price} />
        <ShowMore productId={product.id} />
      </div>
    </div>
  )
}

export default CardProduct
