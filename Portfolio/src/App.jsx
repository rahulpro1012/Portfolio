
import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer';
function App() {
  const containerStyle = {
    backgroundColor: '#13274F',
    height: '100vh', // Adjust the height as needed
  };
  return (
    <div style={containerStyle}>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App
