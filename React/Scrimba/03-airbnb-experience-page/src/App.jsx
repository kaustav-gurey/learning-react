import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'

import dataOfCards from './data.js'

// import MainContent from './components/MainContent'

const cardsSection = dataOfCards.map(item =>{
  return <Card
            key = {item.id}
            item = {item}
            />
})
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className='cards-list'>
        {cardsSection}
      </div>
    </div>
  )
}
