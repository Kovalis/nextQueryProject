import { getLogin } from '@/api/api-login'
import { QUERY_KEYS } from '@/const/queryKeys'
import { useQuery } from '@tanstack/react-query'

export function useLogin() {
  return useQuery({
    queryKey: [QUERY_KEYS.login],
    queryFn: getLogin,
  })
}
