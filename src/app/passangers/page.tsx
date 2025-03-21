'use client'
import st from '@/app/page.module.scss'
import Sidebar from '../../widgets/Sidebar/sidebar'
import { Passangers } from '../../components/passangers'
import { LoadMore } from '../../components/load-more-passangers'
import { usePassangers } from '../../hooks/queries/usePassangerList'
import Loader from '../../shared/Loader'

const PassangersPage = () => {
  const { data, isLoading } = usePassangers(1)
  return (
    <div className={st.gridSidebar}>
      <Sidebar />
      <div className={st.page}>
        {data ? (
          <>
            <div className={st.pageInner}>
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
