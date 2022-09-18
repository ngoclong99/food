import { NAVIGATE } from '@/utils/constant';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={NAVIGATE.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
