import styles from '@/app/page.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2>SIDEBAR</h2>
      <form action="" className={styles.filter}>
        <input type="text" placeholder="Поиск" className={styles['filter__item']} />
        <input type="number" placeholder="Минимальная цена" className={styles['filter__item']} />
        <input type="number" placeholder="Максимальная цена" className={styles['filter__item']} />
      </form>
    </aside>
  )
}
export default Sidebar
