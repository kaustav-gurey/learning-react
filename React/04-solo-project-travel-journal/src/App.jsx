import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import dataOfLocations from './data.js'

const locationCards = dataOfLocations.map(item =>{
  return <Card 
            key = {item.id}
            item = {item}
            />
})
export default function App() {
  return (
    <div>
      <Navbar/>
      <div className='card-list'>
        {locationCards}
      </div>
    </div>
  )
  
}