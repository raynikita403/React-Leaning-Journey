import { useState } from 'react'
import './App.css'
import {EventBinding,ThemeComponent,RandomNumberGenerator,CounterDemo} from "./Components/EventBindingDemo"


function App() {
  return (
    <div>
     <h3> Diffrent Binding Method</h3>
     <EventBinding/>
     <ThemeComponent/>
      <RandomNumberGenerator/>
      <CounterDemo/>
    </div>
  )
}

export default App
