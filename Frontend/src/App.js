import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer/Footer';
import Header from './components/NavBar/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {

  
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
