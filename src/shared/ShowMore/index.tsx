import ButtonBase from '../ButtonBase'

interface IShowMoreProps {
  productId?: number
}

const ShowMore = ({ productId }: IShowMoreProps) => {
  return <ButtonBase href={`${process.env.URL_CATALOG_PRODUCTS_CLOVES}/${productId}`}>Подробнее</ButtonBase>
}

export default ShowMore
