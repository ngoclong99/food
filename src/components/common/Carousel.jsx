import React from 'react'
import PropTypes from 'prop-types'

Carousel.propTypes = {
  data: PropTypes.array,
  speed: PropTypes.number,
  delay: PropTypes.number,
  scroll: PropTypes.number,
  show: PropTypes.number,
}

export function Carousel({ data = [], speed = 1000, delay = 2000, scroll = 1, show = 3 }) {
  return (
    <div className='wrap-carousel'>
      <div class="carousel">
        {data.map((i) => (
          <div key={i.todayId} className="carousel__item">
            1
          </div>
        ))}
      </div>
    </div>
  )
}
