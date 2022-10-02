import setting from '@/assets/image/setting.png'
import '@/components/common/style.scss'
import { getTheme, setTheme } from '@/reducers/settingSlice'
import { getSettingTheme } from '@/utils/config'
import { BG, BLUE_SETTING, GREEN_SETTING, ORANGE_SETTING, YELLOW_SETTING } from '@/utils/constant'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const themes = [ORANGE_SETTING, BLUE_SETTING, GREEN_SETTING, YELLOW_SETTING]

export function Setting() {
  const theme = useSelector(getTheme)
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()

  const onSetTheme = (value) => {
    dispatch(setTheme(value))
  }

  return (
    <div className={`setting ${active ? 'active' : ''}`}>
      <div className="setting__theme">
        <div
          className={`${getSettingTheme(BG, theme)} setting__theme-spin`}
          onClick={() => setActive(!active)}
        >
          <img src={setting} />
        </div>
        <p className="setting__theme-text font-16">color scheme</p>
        <div className="setting__theme-selects">
          {themes.map((theme) => (
            <div
              className={`setting__theme-selects--box ${BG} ${theme}`}
              key={theme}
              onClick={() => onSetTheme(theme)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

