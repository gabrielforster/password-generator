import React, {useState, useEffect} from 'react'
import { CopyPassword } from './CopyPassword'
import { PassBox } from './PassBox'



export const PasswordGen = () => {
  const [password, setPassword] = useState("")
  const [passLength, setPassLength] = useState (8)
  const [passDigits, setPassDigits] = useState(2)
  const [passSymbols, setPassSymbols] = useState(2)

  useEffect(()=>{
    const draftPassword = []

    let lettersLength = passLength - passDigits - passSymbols
    if(lettersLength < 0 ) lettersLength = 0

    draftPassword.push(...Array.from({ length: passDigits }, randomDigit))
    draftPassword.push(...Array.from({ length: passSymbols }, randomSymbol))
    draftPassword.push(...Array.from({ length: lettersLength }, randomLetter))

    setPassword(draftPassword.slice(0, passLength).sort(() => Math.random() -0.5).join(""))
  },
  [passLength, passDigits, passSymbols])

  const randomDigit = () =>{
    const digits = "0123456789"

    return digits[Math.floor(Math.random() * digits.length)]
  }

  const randomSymbol = () =>{
    const symbols = "!@#$%&*?/(){}.,:;-+_"

    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  const randomLetter = () =>{ 
    const letters = "abcdefghijklmnopqrstuvwxyz"

    const letter = letters[Math.floor(Math.random() * letters.length)]
  
    return Math.random() >= 0.5 ? letter : letter.toUpperCase()
  }

  return (
    <>
    <div className='selectors'>
      <div className='slider'>
        <label htmlFor="passwordLength">Tamanho</label>
        <input id="passwordLength" type="range" min={4} max={64} value={passLength} onChange={({target})=>{setPassLength(parseInt(target.value))}} 
        />
        <span>{passLength}</span>
      </div>

      <div className='slider'>
        <label htmlFor="passwordDigits">Digitos</label>
        <input id="passwordDigits" type="range" min={0} max={10} value={passDigits} onChange={({target})=>{setPassDigits(parseInt(target.value))}} 
        />
        <span>{passDigits}</span>
      </div>

      <div className='slider'>
        <label htmlFor="passwordSymbols">Símbolos</label>
        <input id="passwordSymbols" type="range" min={0} max={10} value={passSymbols} onChange={({target})=>{setPassSymbols(parseInt(target.value))}} 
        />
        <span>{passSymbols}</span>
      </div>

      

    </div>
    
    <PassBox password={password}/>
    <CopyPassword password={password}/>
    </>
  )
}