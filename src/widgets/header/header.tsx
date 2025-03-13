'use client'

import Link from 'next/link'
import styles from '@/app/page.module.scss'
import { menuList } from './menuList'
import Login from '../login/login'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles['header__inner']}>
          <ul className={styles['nav-list']}>
            {menuList?.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Login />
        </div>
      </div>
    </header>
  )
}
export default Header
