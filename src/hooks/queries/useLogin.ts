import { getLogin } from '@/api/api-login'
import { QUERY_KEYS } from '@/const/queryKeys'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export function useLogin() {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: [QUERY_KEYS.login],
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
