import { useState } from 'react'
import './App.css'
import './Components/Functional-Components/Top_Navbar'
import TopNavbar from './Components/Functional-Components/Top_Navbar'
import Navbar from './Components/Functional-Components/Navbar'
import Banner from './Components/Functional-Components/Banner'
import CardSection from './Components/Class_Components/Catogories-card'
import NewArrival from './Components/Class_Components/NewArrival'
import Footer from './Components/Class_Components/Footer'
function App() {
 

  return (
    <>
      <TopNavbar/>
      <Navbar/>
      <Banner/>
      <CardSection/>
      <NewArrival/>
      <Footer/>
    </>
  )
}

export default App
