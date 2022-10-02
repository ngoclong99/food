import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getTheme } from '@/reducers/settingSlice'
import { TEXT } from '@/utils/constant'
import { getSettingTheme } from '@/utils/config'

TextEffect.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

export function TextEffect({ text, className }) {
  const theme = useSelector(getTheme)

  return <p className={`${className} ${getSettingTheme(TEXT, theme)}`}>{text}</p>
}
