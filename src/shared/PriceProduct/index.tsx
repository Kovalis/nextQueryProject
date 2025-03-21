import st from '@/app/page.module.scss'

interface IProductPrice {
  productPrice: number
}

const ProductPrice = ({ productPrice }: IProductPrice) => {
  return <span className={st.purpleColor}>{productPrice} ₽</span>
}

export default ProductPrice
