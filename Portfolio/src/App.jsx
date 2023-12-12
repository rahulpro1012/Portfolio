
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer';
import Body from './components/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
function App() {

  return (
    <div>
      <div className='header-h flex'>
      <Navbar/>
      <div className='flex-col height-70'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      </div>
      
      
      
      <Footer/>
    </div>
  )
}

export default App
