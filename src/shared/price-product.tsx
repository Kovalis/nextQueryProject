import styles from '@/app/page.module.scss'

interface IProductPrice {
  productPrice: number
}

const ProductPrice = ({ productPrice }: IProductPrice) => {
  return <span className={styles['purple-color']}>{productPrice} ₽</span>
}

export default ProductPrice
