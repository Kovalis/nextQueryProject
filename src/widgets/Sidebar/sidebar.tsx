import { useProducts } from '@/app/catalog/store'
import style from '@/app/page.module.scss'
import st from './Sidebar.module.scss'

const Sidebar = () => {
  const filterNameProducts = useProducts((state: any) => state.filterNameProducts)
  const getFilterNameProducts = useProducts((state: any) => state.getFilterNameProducts)

  const handlerSearchProducts = (event) => {
    filterNameProducts(event.target.value)
    console.log(getFilterNameProducts(), 'getFilterNameProducts()')
  }

  return (
    <aside className={st.sidebar}>
      <div className={st.sidebarInner}>
        <h2>SIDEBAR</h2>
        <form action="" className={style.filter}>
          <input type="text" placeholder="Поиск" className={style.filterItem} onInput={handlerSearchProducts} />
          <input
            type="number"
            placeholder="Минимальная цена"
            className={style.filterItem}
            onInput={handlerSearchProducts}
          />
          <input
            type="number"
            placeholder="Максимальная цена"
            className={style.filterItem}
            onInput={handlerSearchProducts}
          />
        </form>
      </div>
    </aside>
  )
}
export default Sidebar
