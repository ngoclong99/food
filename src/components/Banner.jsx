import { bannerApi } from '@/api/banner'
import { useEffect, useState } from 'react'
import Skeleton from '@/components/common/Skeleton'

Banner.propTypes = {}

export function Banner(props) {
  const [banner, setBanner] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await bannerApi.getBanner()
        setBanner(res.data)
      } catch (error) {
        console.log('error', error)
        setLoading(false)
      }
      setLoading(false)
    })()
    return () => {
      setLoading(false)
    }
  }, [])
  //  style={{ backgroundImage:`url(${banner.thumbnail})` }}
  return (
    <>
      <Skeleton loading={true}>
        <div>content</div>
      </Skeleton>
      {/* <div className="banner">
        <p> 
          {banner.title} <span>{banner.textTitle[0]}</span>
        </p>
        <p>{banner.description}</p>
      </div> */}
    </>
  )
}
