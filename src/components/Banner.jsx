import { bannerApi } from '@/api/banner'
import { ButtonEffect, ButtonScroll, TextEffect } from '@/components/common'
import LoadingPage from '@/pages/LoadingPage'
import { useEffect, useRef, useState } from 'react'

export function Banner() {
  const [banner, setBanner] = useState({})
  const [loading, setLoading] = useState(true)

  const currentIndexText = useRef(0)
  const [render, setRender] = useState('')
  const [currentRender, setCurrentRender] = useState(0)
  const revert = useRef(false)

  useEffect(() => {
    if (banner.textTitle) {
      const addText = () => {
        setTimeout(() => {
          setRender(render + banner.textTitle[currentIndexText.current][currentRender])
          setCurrentRender(currentRender + 1)
          if (render.length + 1 === banner.textTitle[currentIndexText.current].length) {
            setTimeout(() => {
              revert.current = true
              setCurrentRender(currentRender - 1)
            }, 1000)
          }
        }, 150)
      }
      const subtractText = () => {
        setTimeout(() => {
          let newRender = render.slice(0, -1)
          setRender(newRender)
          if (render.length === 0) {
            revert.current = false
            setCurrentRender(0)
            currentIndexText.current++
          }
        }, 150)
      }

      if (currentIndexText.current === banner.textTitle.length) {
        currentIndexText.current = 0
      }
      if (currentRender < banner.textTitle[currentIndexText.current].length && !revert.current) {
        addText()
      }
      if (revert.current) {
        subtractText()
      }
    }
  }, [banner, currentRender, render])

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
    <div className="banner" style={{ backgroundImage: `url(${banner.thumbnail})` }}>
      <LoadingPage loading={loading} />
      <div className=" wrap-content">
        <p className="title font-74 font-nautigal">
          {banner.title}&nbsp;
          <TextEffect text={render} className="font-nautigal" />
          <span className="end-text">_</span>
        </p>
        <p className="description font-18">{banner.description}</p>
        <ButtonEffect text="book my table" />
        <ButtonScroll />
      </div>
    </div>
  )
}
