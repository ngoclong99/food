import { aboutApi } from '@/api/about'
import { Skeleton, TextEffect } from '@/components/common'
import { useEffect, useState } from 'react'

export function AboutUs() {
  const [about, setAbout] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await aboutApi.getAbout()
        setAbout(res.data)
      } catch (error) {
        console.log('error', error)
        setLoading(false)
      }
      setLoading(false)
    })()
  }, [])

  return (
    <div className="wrap-about-us">
      <div className="wrap-content about-us">
        <div className="about-us__content">
          <Skeleton type="box" loading={loading}>
            <TextEffect className="font-nautigal font-52" text={about.name} />
          </Skeleton>
          <Skeleton type="text" loading={loading}>
            <p className="title font-20">{about.title}</p>
          </Skeleton>
          <Skeleton type="text" count={6} loading={loading}>
            <p className="description font-14-400">{about.description}</p>
          </Skeleton>
        </div>
        <div className="about-us__img">
          <Skeleton type="image" loading={loading}>
            <div className="images">
              <img src={about.thumbnailBig} />
              <img src={about.thumbnailSmall} />
            </div>
          </Skeleton>
        </div>
      </div>
    </div>
  )
}
