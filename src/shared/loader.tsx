import styles from '@/app/page.module.scss'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image className={styles['loader__img']} src="/loader.svg" alt="Next.js logo" width={180} height={38} priority />
    </div>
  )
}
export default Loader
