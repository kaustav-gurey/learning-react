import { useState } from 'react'
import './App.css'
import Die from './Die.jsx'

export default function App() {
  return(
    <main>
      <div className='dice'>
        <Die
        value={489}
        />
      </div>
    </main>
  )
}

