import styles from '@/app/page.module.scss'
import Link from 'next/link'
import { ButtonHTMLAttributes, MouseEventHandler } from 'react'

interface IBtn {
  text?: string
  onClick?: MouseEventHandler
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  link?: boolean
  href?: string
}

const Button = ({ text = 'Открыть', onClick, type = 'button', link, href = '#' }: IBtn) => {
  if (link) {
    return (
      <Link className={styles.mainBtn} href={href}>
        {text}
      </Link>
    )
  } else {
    return onClick ? (
      <button onClick={onClick} className={styles.mainBtn}>
        {text}
      </button>
    ) : (
      <button className={styles.mainBtn} type={type}>
        {text}
      </button>
    )
  }
}

export default Button
