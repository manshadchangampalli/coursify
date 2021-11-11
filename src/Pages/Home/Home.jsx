import Header from '../../Components/Header/Header'
import './Home.scss'

const Home = () =>{
    return(
        <section className="Home">
            <nav className="navbar">
                <Header/>
            </nav>
            <section className="main-section">
                <div className="tittle">
                    <h1>Build your <br /> Next <span>Product</span> <br /> with Deski.</h1>
                </div>
                <aside className="images">

                </aside>
            </section>
        </section>
    )
}
export default Home