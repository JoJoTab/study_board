import React  from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './style.css';
 
import BoardList from './components/BoardList';
import BoardNew from './components/BoardNew';
import BoardContent from './components/BoardContent';
import Footer from './components/Footer';
 
function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<BoardList/>} exact />
            <Route path='/BoardNew' element={<BoardNew/>} exact />
            <Route path='/BoardContent' element={<BoardContent/>} exact />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}
 
export default App;