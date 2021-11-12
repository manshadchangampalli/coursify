import React from 'react'
import './MobileNav.scss'
import closeIcon from '../../Assets/img/close.svg'
import logo from '../../Assets/img/deski_06.svg'
import {useDispatch, useSelector} from 'react-redux'
import {ToggleClicked} from '../../Redux/Actions'


function MobileNav() {
    const dispatch = useDispatch()
    const toggleClicked = useSelector(state => state.toggle) 
    return (
        <div style={toggleClicked?{transform:"translateX(0px)"}:{transform:"translateX(-320px)"}} className="mobile-nav">
            <img onClick={()=>dispatch(ToggleClicked())} className="close-icon" src={closeIcon} alt="" />
            <img className="logo" src={logo} alt="" />
            <ul>
                <li className="nav-links active">About Us</li>
                <li className="nav-links">Features</li>
                <li className="nav-links">Product</li>
                <li className="nav-links">Feedback</li>
                <li className="nav-links">Pricing</li>
            </ul>
        </div>
    )
}

export default MobileNav
