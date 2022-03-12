import React from 'react'
import '../App.css'

export const PassBox = ({password}) => {

    const charClass = (char) =>{
        if(char.match(/[a-zA-Z]/)) return "letter"
        if(char.match(/[0-9]/)) return "digit"
        return "symbol"
    }

  return (
    <div className="passbox">
        <p>
            {Array.from(password).map((char, index) => {
                return <span key={index} className={charClass(char)}>{char}</span>
        })}</p>
    </div>
  )
}