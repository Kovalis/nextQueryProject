import { IProduct } from '@/app/types/catalog.interface'
import st from '@/app/page.module.scss'
import Link from 'next/link'
import ProductPrice from '@/shared/PriceProduct'
import ShowMore from '@/shared/ShowMore'
import ProductRating from '@/shared/Rating'

interface ICartProduct {
  product?: IProduct
}

const CardProduct = ({ product }: ICartProduct) => {
  const { id, image, rating = {}, title, price, description } = product || {}

  return (
    <div className={st.catalogListItem}>
      <Link href={`${process.env.URL_CATALOG_PRODUCTS_CLOVES}/${id}`} className={st.catalogListImgWrap}>
        <img src={image} alt="" className={st.catalogListImg} />
      </Link>

      {!!rating && <ProductRating productRating={rating} />}

      <h2 className={st.catalogListItemTitle}>{title}</h2>

      <div>{description}</div>

      <div className={st.catalogListItemBottom}>
        {!!price && <ProductPrice productPrice={price} />}

        <ShowMore productId={id} />
      </div>
    </div>
  )
}

export default CardProduct
