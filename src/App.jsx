import { NAVIGATE } from '@/utils/constant'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import LayoutClient from '@/layout/LayoutClient'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
