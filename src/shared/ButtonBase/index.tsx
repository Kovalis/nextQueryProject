import st from './ButtonBase.module.scss'
import Link from 'next/link'
import { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react'

interface IBtn {
  onClick?: MouseEventHandler
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  link?: boolean
  href?: string
}

function ButtonBase({ children, onClick, type = 'button', link, href = '#' }: PropsWithChildren<IBtn>) {
  if (link) {
    return (
      <Link className={st.mainBtn} href={href}>
        {children}
      </Link>
    )
  } else {
    return onClick ? (
      <button onClick={onClick} className={st.mainBtn} type={type}>
        {children}
      </button>
    ) : (
      <span className={st.mainBtn}>{children}</span>
    )
  }
}

export default ButtonBase
