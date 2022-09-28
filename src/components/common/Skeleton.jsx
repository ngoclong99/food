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

const renderText = (count, width) => (
  <ul className="skeletons" style={{ width: width }}>
    {Array.from(Array(count), (e, index) => (
      <li key={index} className="skeleton text" />
    ))}
  </ul>
)
const renderBox = (width, height) => <div className="skeleton" style={{ width: width, height: height }} />
const renderCircle = (width, height, radius) => (
  <div className="skeleton" style={{ width: width, height: height, borderRadius: radius }} />
)
const renderImage = (width, height) => (
  <div className="skeleton img">
    <img src={img} height={height} width={width} />
  </div>
)

function Skeleton({
  type = 'box',
  count = 1,
  width = '100px',
  height = '100px',
  radius = '100%',
  loading = false,
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

export default Skeleton
