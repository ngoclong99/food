import { bannerApi } from '@/api/banner'
import { useEffect, useState } from 'react'
import Skeleton from '@/components/common/Skeleton'
import { useSelector } from 'react-redux'
import { getTheme } from '@/reducers/settingSlice'
import { getSettingTheme } from '@/utils/config'
import { TEXT } from '@/utils/constant'
import { useTypingText } from './common/useTypingText'

Banner.propTypes = {}

export function Banner(props) {
  const [banner, setBanner] = useState({})
  const [loading, setLoading] = useState(false)
  const theme = useSelector(getTheme)
  const { word } = useTypingText(['fast', 'reliable', 'affordable'], 40, 40)

  //

  const [text, setText] = useState('')
  const [fullText, setFullText] = useState(
    'Your source of leading edge water and air treatment technology since 1994.',
  )
  const [index, setIndex] = useState(0)

  //
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 40)
    }
  }, [index])
  //

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
          {banner.title}
          <span className={`${getSettingTheme(TEXT, theme)}`}>{word}</span>
        </p>
        <p>{banner.description}</p>
        <h2>{text}</h2>
      </div>
    </>
  )
}
