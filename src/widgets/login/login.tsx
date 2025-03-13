'use client'

import { useLogin } from '@/hooks/useLogin'
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {
  const [loginText, setLoginText] = useState(false)
  const { data, refetch } = useLogin()

  const toggleLogin = () => {
    refetch()
    setLoginText(!loginText)
  }

  return (
    <Link href="#" onClick={toggleLogin}>
      {loginText ? 'Logout' : 'Login'}
    </Link>
  )
}

export default Login
