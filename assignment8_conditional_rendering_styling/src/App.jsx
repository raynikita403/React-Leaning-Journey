import { useState } from 'react'
import './App.css'
import { LoginControl } from './Component/Task1'
import { ColorText } from './Component/Task2'
import { MessageToggle } from './Component/Task3'
function App() {
  
  return (
    <>
     <h4 className='text-center'> This is Assignment 8</h4>
      {/*This is Task-1 : Show Login/Logout Button*/}
      <LoginControl/>

       {/*This is Task-2 : Change Text Color Conditionally */}
      <ColorText/>

      {/*This is Task-3 : Show/Hide Message */}
      <MessageToggle/>
    </>
  )
}

export default App
