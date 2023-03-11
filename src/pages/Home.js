import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSelection from '../components/Home/homeSection';


export default function Home() {
    return (
        <>
        <Navbar />
        <div className="App">
            <HomeSelection />
        </div>
        <Footer />
        </>
    )
}