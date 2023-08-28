import React from 'react'
import './App.css'
import Die from './Die.jsx'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=>{
    // const compareValue = dice[0].value
    // for(let i = 0; i<10; i++){
    //   if(dice[i].value!=compareValue || !dice[i].isHeld){
    //     return
    //   }
    // }
    // setTenzies(true)

    //doing the same thing as above but with "every"
    //if even on eisHeld value is false then the value of allHeld will be false
    const allHeld = dice.every(die => die.isHeld)
    
    const firstvalue = dice[0].value
    //if even one value is not equal to firstValue allSameValue will be false
    const allSameValue = dice.every(die => die.value === firstvalue)
    if(allHeld && allSameValue){
      setTenzies(true)
    }
  },[dice])
  
  function generateRandomNumber(){
    return Math.ceil(Math.random() * 6)
  }
  
  function allNewDice(){
    let sol = []
    for(let i =0; i<10; i++){
      sol.push({
        id: nanoid(),
        value: generateRandomNumber(),
        isHeld: false
      }) 
    }
    return sol
  }

  function rollDice(){
    if(tenzies){
      setDice(allNewDice())
      setTenzies(false)
    }
    else{
      setDice(oldDice => oldDice.map(die=>{
        return die.isHeld ?
          {...die} :
          {...die, value : generateRandomNumber()}
      }))
    }
  }

  const dieUnits = dice.map(item =>{
    return <Die
              // id={item.id}
              key = {item.id}
              value = {item.value}
              isHeld = {item.isHeld}
              holdDice = {() => holdDice(item.id)}
          />
  })

  function holdDice(id) {
      setDice(oldDice => oldDice.map(die =>{
        return die.id === id ? 
          {...die, isHeld : !die.isHeld} :
          {...die}
      }))
  }

  return(
    <main>
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {dieUnits}
      </div>
      <button className='btn' onClick={rollDice}> 
       {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}

