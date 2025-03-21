'use client'

import { useEffect, useState } from 'react'
import { IPassanger } from '../app/types/passangers.interface'
import Loader from '../shared/Loader'
import { useInView } from 'react-intersection-observer'
import { Passangers } from './passangers'
import { getPassangers } from '@/api/api-passangers'

export function LoadMore() {
  const [passangers, setPassangers] = useState<IPassanger[]>([])
  const [pageLoaded, setPageLoaded] = useState(1)
  const [loading, setLoading] = useState(false)

  const { ref, inView } = useInView()

  const loadMorePassangers = async () => {
    if (loading) return
    setLoading(true)

    try {
      const nextPage = pageLoaded + 1
      const response = await getPassangers(nextPage)
      if (response) {
        setPassangers((prevPassangers: IPassanger[]) => [...prevPassangers, ...response.data])
        setPageLoaded(nextPage)
      }
    } catch (error) {
      console.error('Error loading more passangers:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inView && !loading) {
      console.log('scroll end')
      loadMorePassangers()
    }
  }, [inView, loading])

  return (
    <>
      {passangers.length > 0 && <Passangers passangers={passangers} />}

      <div ref={ref}> {loading && <Loader />}</div>
    </>
  )
}
