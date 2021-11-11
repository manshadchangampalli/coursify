import React from 'react'
import './Header.scss'

function Header() {
    return (
        
        <div className="header">{/*the all header section (navbar)*/}
            
            <div className="logo">{/* the logo section included the logo title and logo tittle  */}
                <div className="logo-icon">
                    D
                </div>
                <div className="logo-tittle">
                    <h1>deski.</h1>
                </div>
            </div>
           
            <div className="nav-items"> {/* the nav links and the last button  */}
                <div className="nav-item nav-home">Home</div>
                <div className="nav-item nav-about">About Us</div>
                <div className="nav-item nav-features">Features</div>
                <div className="nav-item nav-products">Product</div>
                <div className="nav-item nav-feedback">Feedback</div>
                <div className="nav-item nav-pricing">Pricing</div>
                <div className="nav-item request-button">
                    <h4>Request A Demo</h4>
                </div>
            </div>
        </div>
    )
}

export default Header

