import { getLogin } from '@/api/api-login'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export function useLogin() {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ['login'],
    queryFn: getLogin,
    // select: (data) => data,
  })

  useEffect(() => {
    if (isError) {
      console.log(isError)
    }
  }, [isError])

  return { data, isLoading, isSuccess, isError, refetch }
}
