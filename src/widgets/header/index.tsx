'use client'

import Link from 'next/link'
import st from '@/app/page.module.scss'
import { menuList } from './menuList'
import Login from '../Login'

const Header = () => {
  return menuList ? (
    <header className={st.header}>
      <div className={st.container}>
        <div className={st.headerInner}>
          <ul className={st.navList}>
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
  ) : null
}
export default Header
