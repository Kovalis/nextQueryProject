import style from '@/app/page.module.scss'
import st from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={st.sidebar}>
      <div className={st.sidebarInner}>
        <h2>SIDEBAR</h2>
        <form action="" className={style.filter}>
          <input type="text" placeholder="Поиск" className={style.filterItem} />
          <input type="number" placeholder="Минимальная цена" className={style.filterItem} />
          <input type="number" placeholder="Максимальная цена" className={style.filterItem} />
        </form>
      </div>
    </aside>
  )
}
export default Sidebar
