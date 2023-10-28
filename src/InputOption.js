import React from 'react'
import "./InputOption.css"

function InputOption({Icon,title}) {
  return (
    <div className='InputOption'>
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption
