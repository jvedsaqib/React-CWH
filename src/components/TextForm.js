import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleOnClickUpper = ()=> {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnClickLower = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChangeUpper = (event)=> {
        setText(event.target.value)
    }

    const handleOnClickClear = ()=> {
        setText('')
    }
    
    

    const [text, setText] = useState('')

    return (
        <>
        <div className="container" style={ {color: props.mode==='light'?'black':'white' } } >
            <div className="container" style={ {color: props.mode==='light'?'black':'white' } }>
                <div className="mb-3" style={ {color: props.mode==='light'?'black':'white' } }>
                    <h1>{ props.setHeading }</h1>
                    <textarea className="form-control" value={ text } onChange={ handleOnChangeUpper } id="textBox" rows="8"></textarea>
                    <br/>
                </div>
                    <button className='btn btn-primary mx-2 my-2' onClick={ handleOnClickUpper } >Convert to upper case</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={ handleOnClickLower } >Convert to lower case</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={ handleOnClickClear } >Clear Text</button>
            </div>

            <div className="container my-3" style={ {color: props.mode==='light'?'black':'white' } }>
                <h1>Text Summary</h1>
                <p>{ text.split(' ').length - 1 } words and { text.length } characters</p>
                <p>{ 0.008 * (text.split(' ').length - 1) } minutes read</p>
            </div>
        </div>
        </>
  )
}
