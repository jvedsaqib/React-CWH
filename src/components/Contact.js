import React from 'react'

export default function Contact(props) {

  const handleBtn = ()=> {
    props.alert("Thank you for contacting us", 'success')
  }

  return (
    <div>
      <h1 className="display-1 mx-5" style={ {color: props.mode==='light'?'#333333':'white' } }>{ props.contactText }</h1>

      <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label" style={ {color: props.mode==='light'?'#333333':'white' } }>Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
      </div>

      <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label" style={ {color: props.mode==='light'?'#333333':'white' } }>Phone Number</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Number" />
      </div>

      <div className="mb-3 container">
        <label for="exampleFormControlInput1" className="form-label" style={ {color: props.mode==='light'?'#333333':'white' } }>Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@abc.com" />
      </div>

      <div className="mb-3 container">
        <label for="exampleFormControlTextarea1" className="form-label" style={ {color: props.mode==='light'?'#333333':'white' } }>Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
      </div>

      <div className="mb-3 container">
      <button type="button" className="btn btn-primary" onClick={ handleBtn }>Send</button>
      </div>


    </div>
  )
}
