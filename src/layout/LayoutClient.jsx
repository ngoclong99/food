import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@/components'
import { Outlet } from 'react-router-dom'
import '@/style/style.scss'

LayoutClient.propTypes = {}

function LayoutClient(props) {
  return (
    <>
      <div className="wrap-content">
        {/* <Menu /> */}
      </div>
      <Outlet />
    </>
  )
}

export default LayoutClient
