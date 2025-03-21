'use client'
import st from '../../page.module.scss'
import { useRouter, useParams } from 'next/navigation'
import Loader from '@/shared/Loader'
import { useProductById } from '@/hooks/queries/useProductById'
import ButtonBase from '@/shared/ButtonBase'
import { getProducts } from '@/api/api-requests'

// export const getStaticProps = async () => {
//   const data = await getProducts()

//   return {
//     props: { data },
//   }
// }

const CatalogItem = () => {
  const pathName = useParams()
  const router = useRouter()

  const { data, isLoading, isSuccess, isError } = useProductById(Number(pathName.slug))

  return (
    <div className={st.page}>
      <ButtonBase onClick={() => router.push(`${process.env.URL_CATALOG_PRODUCTS_CLOVES}`)}>Back</ButtonBase>

      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <h1 className={st.h1}>{data.title}</h1>
          <div className={st.productItem}>
            <div>
              <img src={data.image} alt="" width="500" height="600" className={st.productItemImg} />
            </div>
            <div>{data.description}</div>
            <div className={st.productItemBottom}>
              <span className={st.purpleColor}>{data.price} ₽</span>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default CatalogItem
