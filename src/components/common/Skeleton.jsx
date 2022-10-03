import React from 'react'
import PropTypes from 'prop-types'
import img from '@/assets/image/imgDefalut.png'

Skeleton.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number,
  loading: PropTypes.bool,
}

const renderText = (count) => (
  <ul className="skeletons text">
    {Array.from(Array(count), (e, index) => (
      <li key={index} className="skeleton text" />
    ))}
  </ul>
)
const renderBox = () => <div className="skeleton box" />
const renderCircle = () => <div className="skeleton circle" />
const renderImage = () => (
  <div className="skeleton img">
    <img src={img} />
  </div>
)

export function Skeleton({ type = 'box', count = 1, loading = true, children }) {
  switch (type) {
    case 'text':
      return <>{loading ? renderText(count) : children}</>
    case 'box':
      return <>{loading ? renderBox() : children}</>
    case 'circle':
      return <>{loading ? renderCircle() : children}</>
    case 'image':
      return <>{loading ? renderImage() : children}</>
    default:
      return <>{loading ? renderBox() : children}</>
  }
}
