'use client'

import { useLogin } from '@/hooks/queries/useLogin'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ModalAuth } from '../ModalAuth'
import { ModalTemplate } from '../ModalTemplate'

const Login = () => {
  const [loginText, setLoginText] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const { data, refetch } = useLogin()

  const toggleLogin = (e) => {
    e.preventDefault()
    refetch()
    setVisibleModal(true)
  }

  useEffect(() => {
    if (loginText) {
      setVisibleModal(false)
    }
  }, [loginText])

  return (
    <>
      <Link href="/#" onClick={toggleLogin}>
        {loginText ? 'Logout' : 'Login'}
      </Link>
      {visibleModal && (
        <ModalTemplate visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
          <ModalAuth setLoginText={setLoginText} />
        </ModalTemplate>
      )}
    </>
  )
}

export default Login
