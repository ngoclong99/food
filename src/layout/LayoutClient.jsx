import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@/components'
import { Outlet } from 'react-router-dom'
import Setting from '@/components/common/Setting'
import '@/style/style.scss'

LayoutClient.propTypes = {}

function LayoutClient(props) {
  return (
    <>
      <Setting />
      <div className="wrap-content">{/* <Menu /> */}</div>
      <Outlet />
    </>
  )
}

export default LayoutClient
