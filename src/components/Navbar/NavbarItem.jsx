import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
function NavbarItem(props) {
    return (
        <Fragment>
            <NavLink className={props.btclasses  }  to={props.target}>
                {props.title}
            </NavLink>
        </Fragment>
    )
}

export default NavbarItem
