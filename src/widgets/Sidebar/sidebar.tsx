import st from '@/app/page.module.scss'

const Sidebar = () => {
  return (
    <aside className={st.sidebar}>
      <h2>SIDEBAR</h2>
      <form action="" className={st.filter}>
        <input type="text" placeholder="Поиск" className={st.filterItem} />
        <input type="number" placeholder="Минимальная цена" className={st.filterItem} />
        <input type="number" placeholder="Максимальная цена" className={st.filterItem} />
      </form>
    </aside>
  )
}
export default Sidebar
