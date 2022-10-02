import { getTheme } from '@/reducers/settingSlice'
import { getSettingTheme } from '@/utils/config'
import { BG } from '@/utils/constant'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

ButtonEffect.propTypes = {
  text: PropTypes.string,
}

export function ButtonEffect({ text }) {
  const theme = useSelector(getTheme)

  return <div className={`${getSettingTheme(BG, theme)} font-18-800 button-effect`}>{text}</div>
}
