import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';



function App() {
  console.log("testing");
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} excact />
        <Route path='/test' element={<Test />} excact />
      </Routes>
    </Router>
  );
}

export default App;
