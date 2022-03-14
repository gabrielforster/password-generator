import React from 'react'
import '../App.css'

export const CopyPassword = ({password}) => {

  const copyPass = () =>{
      navigator.clipboard.writeText(password)
  }

  return (
    <div className='action'>
        <button className='copy-pass' onClick={copyPass}>
            Copiar para área de transferência
        </button>
    </div>
  )
}