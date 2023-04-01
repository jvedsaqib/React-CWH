import React from 'react'

export default function About(props) {
  return (
    <>
        <h1 className="display-1 mx-5" style={ {color: props.mode==='light'?'#333333':'white' } }>About this page</h1>
        
        <div id="carouselExampleIndicators" className="carousel slide container" style={ {color: props.mode==='light'?'#333333':'white' } }>
          <div className="carousel-indicators" style={ {color: props.mode==='light'?'#333333':'white' } }>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" style={ {color: props.mode==='light'?'#333333':'white' } }>
            <div className="carousel-item active" style={ {color: props.mode==='light'?'#333333':'white' } }>
              <h1 className='mx-auto'>Image 1</h1>
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" style={ {color: props.mode==='light'?'#333333':'white' } }>
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" style={ {color: props.mode==='light'?'#333333':'white' } }>
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

    </>
  )
}
