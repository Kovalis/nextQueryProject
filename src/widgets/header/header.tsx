'use client'

import Link from 'next/link'
import styles from '@/app/page.module.scss'
import { menuList } from './menuList'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles['nav-list']}>
          {menuList.length > 0
            ? menuList.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))
            : 'Что-то пошло не так'}
        </ul>
      </div>
    </header>
  )
}
export default Header
