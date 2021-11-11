import Header from '../../Components/Header/Header'
import Images from '../../Components/Images/Images'
import Tittle from '../../Components/Tittle/Tittle'
import './Home.scss'

const Home = () =>{
    return(
        <section className="Home">
            <nav className="navbar">
                <Header/>
            </nav>
            <section className="main-section">
                <Tittle/>
                <aside className="images">
                    <Images/>
                </aside>
            </section>
        </section>
    )
}
export default Home