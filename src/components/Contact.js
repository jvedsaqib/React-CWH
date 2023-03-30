import React from 'react'

export default function Contact(props) {
  return (
    <div>
      <h1 className="display-1" style={ {color: props.mode==='light'?'#333333':'white' } }>{ props.contactText }</h1>
    </div>
  )
}
