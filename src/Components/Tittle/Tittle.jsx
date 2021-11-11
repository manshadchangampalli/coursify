import React from 'react'
import playIcon from '../../Assets/img/play-circle.svg'
import appleIcon from '../../Assets/img/apple.svg'
import './Tittle.scss'

function Tittle() {
    return (
        <div className="tittle">
            <h1 className="tittle-h1">Build your <br /> Next <span>Product</span> <br /> with Deski.</h1>
            <p className="sub-tittle-p">Deski delivered blazing fast, striking soludtion</p>
            <div className="buttons">
                <div className="applestore">
                    <div className="apple-icon">
                        <img className="apple-icon-img" src={appleIcon} alt="" />
                    </div>
                    <div className="download-texts">
                        <p className="download-text">Download on the</p>
                        <p className="app-store-text">App store</p>
                    </div>
                </div>
                <div className="seeintro">
                    <img src={playIcon} alt="" />
                    <p>See intro Video</p>
                </div>
            </div>
        </div>
    )
}

export default Tittle
