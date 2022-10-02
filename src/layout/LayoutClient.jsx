import { Setting } from '@/components/common'
import '@/style/style.scss'
import { Outlet } from 'react-router-dom'

function LayoutClient() {
  return (
    <>
      <Setting />
      <div className="wrap-content">{/* <Menu /> */}</div>
      <Outlet />
    </>
  )
}

export default LayoutClient
