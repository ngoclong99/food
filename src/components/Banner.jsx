import { bannerApi } from '@/api/banner'
import { useEffect, useState } from 'react'
import Skeleton from '@/components/common/Skeleton'
import { useSelector } from 'react-redux'
import { getTheme } from '@/reducers/settingSlice'
import { getSettingTheme } from '@/utils/config'
import { TEXT } from '@/utils/constant'

Banner.propTypes = {}

export function Banner(props) {
  const [banner, setBanner] = useState({})
  const [loading, setLoading] = useState(false)
  const theme = useSelector(getTheme)

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
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${banner.thumbnail})` }}>
        <p>
          {banner.title} <span className={`${getSettingTheme(TEXT, theme)}`}>{banner.textTitle?.[0]}</span>
        </p>
        <p>{banner.description}</p>
      </div>
    </>
  )
}
