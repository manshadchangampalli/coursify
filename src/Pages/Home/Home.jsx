import {useEffect, useState} from 'react'
import BackgroundGradient from '../../Components/BackgroundGradient/BackgroundGradient'
import Header from '../../Components/Header/Header'
import Images from '../../Components/Images/Images'
import MobileNav from '../../Components/MobileNav/MobileNav'
import Tittle from '../../Components/Tittle/Tittle'
import './Home.scss'

const Home = () =>{
    var style = {}
    const [scrollY, setScrollY] = useState(0)
    
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            setScrollY(window.scrollY)   
        })
    }, [])

    if(scrollY>25){
        style = {backgroundColor:"#17192b"}
        
    }else{
        style = {}
    }

    return(
        <section className="Home">
            <nav  style={style} className="navbar">
                <Header/>
            </nav>
            <section className="main-section">
                <Tittle/>
                <aside className="images">
                    <Images/>
                </aside>
            </section>
            <BackgroundGradient/>
            <MobileNav/>
        </section>
    )
}
export default Home