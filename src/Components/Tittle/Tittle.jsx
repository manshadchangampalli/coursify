import React,{useEffect} from 'react'
import playIcon from '../../Assets/img/play-circle.svg'
import appleIcon from '../../Assets/img/apple.svg'
import './Tittle.scss'
import Aos from "aos"
import 'aos/dist/aos.css'

function Tittle() {
    useEffect(() => {
    
        Aos.init({duration:2000});
    },[])
    return (
        <div className="tittle">
            <h1 className="tittle-h1">Build your <br /> Next <span>Product</span> <br /> with Deski.</h1>
            <p data-aos="fade-up" className="sub-tittle-p">Deski delivered blazing fast, striking soludtion</p>
            <div className="buttons">
                <div data-aos="fade-up" data-aos-duration="500" className="applestore">
                    <div className="apple-icon">
                        <img className="apple-icon-img" src={appleIcon} alt="" />
                    </div>
                    <div className="download-texts">
                        <p className="download-text">Download on the</p>
                        <p className="app-store-text">App store</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="seeintro">
                    <img src={playIcon} alt="" />
                    <p>See intro Video</p>
                </div>
            </div>
        </div>
    )
}

export default Tittle
