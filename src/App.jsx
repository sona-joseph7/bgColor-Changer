import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  // initial background color is set to 'white'
  const [bgColor,setBgColor]=useState('White');

  //array of colors for background
  const colors = ['Red','Green','Blue','Pink','Yellow','Purple']
  return (
    <>
      <div className='app-container' style={{backgroundColor:bgColor}}>
        <h1 className='header'>Background Color Changer</h1>
        <h6>Choose any color for your background...!!!</h6>
        {/* background selector */}
        <div className='button-container'>
          {colors.map((color)=>(
            <button onClick={()=>setBgColor(color)} key={color} className="color-btn" style={{backgroundColor:color}}>
              {color}
              </button>
          ))}
        </div>
        {/* Adding a Reset Button  */}
        <button onClick={()=>setBgColor('White')} className='reset-btn'>
          Reset
          </button>

          {/* To display current color  */}
        <div className='current-color'>
           <p>Current Background Color is : <strong>{bgColor}</strong></p>
        </div>
      </div>
    </>
  )
}

export default App
