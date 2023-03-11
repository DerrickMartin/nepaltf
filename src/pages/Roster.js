import Navbar from '../components/Navbar'
import NepalMap from '../assets/nepal_map1.png'
import Footer from '../components/Footer';


import './RosterStyles.css'

export default function Roster() {
    return (
        <>
        <Navbar />
        <img src={NepalMap} className="RosterMap" alt="Nepal_Map" />

        <h1>Roster</h1>
        <Footer />
        </>
    )
}