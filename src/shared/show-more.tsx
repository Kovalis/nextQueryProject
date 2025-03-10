import Link from 'next/link'
import styles from '@/app/page.module.scss'
import Button from './button'

interface IShowMoreProps {
  productId?: number
}

const ShowMore = ({ productId }: IShowMoreProps) => {
  return (
    // <Link  className={`${styles['catalog-list__item-btn']} ${styles['purple-color']}`}>

    // </Link>
    <Button href={`/catalog/${productId}`} text={'Подробнее'} />
  )
}

export default ShowMore
