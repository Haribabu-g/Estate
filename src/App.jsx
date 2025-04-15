import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonails from './Components/Testimonails'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/footer'




const App = () => {
  return (
    <div className='w-full overflow-hidden'>
        <ToastContainer/>
        <Header/>
        <About/>
        <Projects/>
        <Testimonails/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App