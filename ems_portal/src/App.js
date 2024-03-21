import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePageComponent from './components/HomePageComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>

      <Router>
        <div className='container-fluid p-0'>
          <HeaderComponent />
          <div className='container-md'>
            <Routes>
              <Route path='/' element={<HomePageComponent />} />
              <Route path='/employees' element={<ListEmployeeComponent />} />
              <Route path='/add-employee' element={<AddEmployeeComponent />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>

    </div>
  );
}

export default App;
