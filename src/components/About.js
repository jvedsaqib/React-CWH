import React from 'react'

export default function About(props) {
  return (
    <>
        <h1 className="display-1" style={ {color: props.mode==='light'?'#333333':'white' } }>About this page</h1>
    </>
  )
}
