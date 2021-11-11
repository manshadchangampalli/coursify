import React from 'react'
import BackgroundCircle from '../../Assets/img/144.svg'
import BackgroundCircle1 from '../../Assets/img/145.svg'
import BackgroundCircle2 from '../../Assets/img/150.png'
import BackgroundCircle3 from '../../Assets/img/147.svg'
import BackgroundCircle4 from '../../Assets/img/148.svg'
import Card1 from '../../Assets/img/coursify.png'
import Card2 from '../../Assets/img/screen_06.png'
import Dots from '../../Assets/img/146.svg'
import arrow from '../../Assets/img/149.svg'
import './Images.scss'
function Images() {
    return (
        <div className="images-section">
            <div className="illustration-section">
                <img className="background-circle" src={BackgroundCircle} alt="" />
                <img className="background-circle-1" src={BackgroundCircle1} alt="" />
                <img className="background-circle-2" src={BackgroundCircle2} alt="" />
                <img className="background-circle-3" src={BackgroundCircle3} alt="" />
                <img className="background-circle-4" src={BackgroundCircle4} alt="" />
                <img className="dots" src={Dots} alt="" />            
                <img className="card-1" src={Card1} alt="" />
                <img className="card-2" src={Card2} alt="" />
                <img className="arrow" src={arrow} alt="" />
            </div>
        </div>
    )
}

export default Images
