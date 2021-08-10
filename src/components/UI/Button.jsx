import React from 'react'

function Button(props) {
    return (
        <button className={"custom-btn " + props.btntypeclass }>{props.text}</button>
        )
}

export default Button
