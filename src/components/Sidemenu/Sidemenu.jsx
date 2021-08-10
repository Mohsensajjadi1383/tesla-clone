import React, { useContext } from 'react'
import "../../assets/scss/sidemenu/sidemenu.css"
import context from '../../Store/context';
import NavbarItem from '../Navbar/NavbarItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
function Sidemenu(props) {
    const ctx = useContext(context)
    return (
        <nav className={"side-menu " + props.customclass} >
            <div className="closemenu-container">
                <span onClick={() => { ctx.changestatus() }} className="close-menu-icon" >
                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g stroke="var(--tds-icon--fill, #171a20)" strokeWidth="1.5" strokeLinecap="round"><line x1="10" y1="10" x2="20" y2="20"></line><line x1="20" y1="10" x2="10" y2="20"></line></g></svg>
                </span>

            </div>

            <div className="navigation-items-container ">
                <NavbarItem btclasses="col-11 default-navigation-item " title="RoadSter" target="/" />
                <NavbarItem btclasses="col-11 default-navigation-item " title="CyberTruck" target="/" />
                <NavbarItem btclasses="col-11 default-navigation-item " title="Test Drive" target="/" />
                <NavbarItem btclasses="col-11 default-navigation-item " title="Utilities" target="/" />
                <NavbarItem btclasses="col-11 default-navigation-item " title="Find US" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Shop" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Account" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Model S" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Model 3" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Model X" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Model Y" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Solar Roof" target="/" />
                <NavbarItem btclasses="col-11 responsive-menu-item " title="Solar Panels" target="/" />
            </div>
        </nav>
    )
}

export default Sidemenu
