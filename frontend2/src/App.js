import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Orders from './pages/Orders/Orders';

function App() {
  console.log("testing");
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} excact />
        <Route path='/orders' element={<Orders />} excact />
      </Routes>
    </Router>
  );
}

export default App;
