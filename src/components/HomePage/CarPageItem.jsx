import React from 'react'
import {Fade} from 'react-reveal'
function CarPageItem(props) {
    return (
        <div className="image-container" style={{ backgroundImage: `url(${props.bgsrc})` }} >
            <div className="product-introduce">
                  <Fade bottom>
                      <div className="introduce-title-container">
                    <h1 className="introduce-title">{props.title}</h1>
                    <p  className="introduce-explanation">{props.explain}</p>
                    </div>
                  </Fade>

                  <Fade top >
                  <div className={"introduce-btn-container " + props.justify }>{props.children}</div>
                  </Fade>
            </div>

        </div>
    )
}

export default CarPageItem
