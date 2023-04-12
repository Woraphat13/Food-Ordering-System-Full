import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

import Thank from './pages/Thank';
import Delete1 from './pages/Delete1';
import Menu from './pages/Menu';
import Payment from './pages/Payment';
import OrderStatusCheck from './pages/OrderStatusCheck';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Thank' element={<Thank />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Menu/Payment' element={<Payment />} />
          <Route path='/Menu/Payment/Delete1' element={<Delete1 />} />
          <Route path='/Menu/Payment/Delete1/Thank' element={<Thank />} />
 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
