import { IRating } from '@/app/types/catalog.interface'
import st from './RatingProduct.module.scss'

interface IProductRating {
  productRating?: IRating
}

const ProductRating = ({ productRating }: IProductRating) => {
  return <span className={st.catalogListItemRating}>{productRating?.rate}</span>
}

export default ProductRating
