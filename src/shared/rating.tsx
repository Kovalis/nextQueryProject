import styles from '@/app/page.module.scss'

interface IProductRating {
  productRating: number
}

const ProductRating = ({ productRating }: IProductRating) => {
  return <span className={styles['catalog-list__item-rating']}>{productRating}</span>
}

export default ProductRating
