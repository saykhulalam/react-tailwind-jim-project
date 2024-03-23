import { useState } from 'react'
import './App.css'
import Nave from './components/Nave'
import Banner from '../src/components/Banner'
import Join from './components/Join'
import Membership from './components/Membership'
import About from './components/About'
import Staf from './components/Staf'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nave/>
      <Banner/>
      <Join/>
      <Membership/>
      <About/>
      <Staf/>
      <Footer/>
    </>
  )
}

export default App
