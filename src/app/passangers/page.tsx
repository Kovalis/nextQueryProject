'use client'
import styles from '@/app/page.module.scss'
import Sidebar from '../../widgets/sidebar'
import { Passangers } from '../../components/passangers'
import { LoadMore } from '../../components/load-more-passangers'
import { usePassangers } from '../../hooks/usePassangerList'
import Loader from '../../shared/loader'

const PassangersPage = () => {
  const { data, isLoading } = usePassangers(1)
  return (
    <div className={styles['grid-sidebar']}>
      <Sidebar />
      <div className={styles.page}>
        {data ? (
          <>
            <div className={styles['page__inner']}>
              <h1>Catalog Passangers</h1>
              {isLoading ? <Loader /> : <Passangers passangers={data} />}
            </div>

            <LoadMore />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default PassangersPage
