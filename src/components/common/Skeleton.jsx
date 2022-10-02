import React from 'react'
import PropTypes from 'prop-types'
import '@/components/common/style.scss'
import img from '@/assets/image/imgDefalut.png'

Skeleton.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  loading: PropTypes.bool,
}

const renderText = (count, width = '150px') => (
  <ul className="skeletons text" style={{ width: width }}>
    {Array.from(Array(count), (e, index) => (
      <li key={index} className="skeleton text" />
    ))}
  </ul>
)
const renderBox = (width = '250px', height = '150px') => (
  <div className="skeleton box" style={{ width: width, height: height }} />
)
const renderCircle = (width = '150px', height = '150px', radius) => (
  <div className="skeleton circle" style={{ width: width, height: height, borderRadius: radius }} />
)
const renderImage = (width = '100%', height = '100%') => (
  <div className="skeleton img" style={{ height: height, width: width }}>
    <img src={img} />
  </div>
)

export function Skeleton({
  type = 'box',
  count = 1,
  loading = true,
  children,
}) {
  switch (type) {
    case 'text':
      return <>{loading ? renderText(count, width) : children}</>
    case 'box':
      return <>{loading ? renderBox(width, height) : children}</>
    case 'circle':
      return <>{loading ? renderCircle(width, height, radius) : children}</>
    case 'image':
      return <>{loading ? renderImage(width, height) : children}</>
    default:
      return <>{loading ? renderBox(width, height) : children}</>
  }
}
