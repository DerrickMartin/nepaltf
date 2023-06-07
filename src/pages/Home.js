import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSelection from '../components/Home/homeSection';


export default function Home() {
    return (
        <>
        <Navbar />
        <h3 style={{textAlign: 'center', padding: '1rem'}}>Site is currently under construction</h3>

        <div className="App">
          <div id="google_translate_element"></div>
            <HomeSelection />
        </div>
        <Footer />
        </>
    )
}
