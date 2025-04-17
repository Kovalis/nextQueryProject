'use client'

import Link from 'next/link'
import st from '@/app/page.module.scss'
import { menuList } from './menuList'
import Login from '../Login'
import { useMainStore } from '@/app/mainStore'
import { useEffect } from 'react'

const Header = () => {
  const stateTheme = useMainStore((state: any) => state.theme)
  const stateToggleTheme = useMainStore((state: any) => state.setToggleTheme)
  const changeTheme = () => {
    stateToggleTheme()
  }

  useEffect(() => {
    if (stateTheme) {
      document.body.classList.add(st.themeDark)
    } else {
      document.body.classList.remove(st.themeDark)
    }
  }, [stateTheme])

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
          <div className={st.headerRight}>
            <Login />
            <button onClick={changeTheme}>{stateTheme ? 'Light' : 'Dark'}</button>
          </div>
        </div>
      </div>
    </header>
  ) : null
}
export default Header
