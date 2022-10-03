import { todayApi } from '@/api/today'
import { useEffect } from 'react'
import { useState } from 'react'
import { TextEffect, Skeleton, Carousel } from '@/components/common'

export function Today() {
  const [today, setToday] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await todayApi.getToday()
        setToday(res.data)
      } catch (error) {
        console.log('error', error)
        setLoading(false)
      }
      setLoading(false)
    })()
  }, [])

  return (
    // style={{ backgroundImage: `url(${banner.thumbnail})` }}
    <div className="wrap-today">
      <div className="wrap-content today">
        <Skeleton type="box" loading={loading}>
          <TextEffect className="font-nautigal font-52" text={today.name} />
        </Skeleton>
        <Skeleton type="text" loading={loading}>
          <p className="description font-18">{today.description}</p>
        </Skeleton>
        <Skeleton type="image" loading={loading}>
          <Carousel data={today.data} speed={1000} delay={2000} scroll={1} show={3} />
        </Skeleton>
      </div>
    </div>
  )
}
