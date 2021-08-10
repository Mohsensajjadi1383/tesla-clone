import React,{useContext} from 'react'
import context from '../../Store/context'
function NavbarMenu() {
    const ctx  =  useContext(context)
    return (
       <p className="navigation-item d-block navgation-menu" onClick={() =>{ctx.changestatus() }}>
           Menu
       </p>
    )
}

export default NavbarMenu
