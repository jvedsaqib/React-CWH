import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleOnClickUpper = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChangeUpper = (event)=> {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Your Text Here...')

    return (
            <>
            <div className="mb-3">
                <h1>{ props.setHeading }</h1>
                <textarea className="form-control" value={ text } onChange={ handleOnChangeUpper } id="textBox" rows="8"></textarea>
                <br/>
            </div>
                <button className='btn btn-primary' onClick={ handleOnClickUpper } >Convert to upper case</button>
            </>
  )
}
