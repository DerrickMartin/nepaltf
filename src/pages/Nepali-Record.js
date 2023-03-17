import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import './Nepali_Record_Listing.css'
import MensRecordList from '../components/NepaliRecords/MensRecordList';
import WomensRecordList from '../components/NepaliRecords/WomensRecordList';

export default function Nepali_Records() {
    return (
        <>
        <Navbar />
        <h1>Nepali Records</h1>
        <h6>Updated as of March 12, 2023</h6> 
        <h6 style={{color: 'tomato', fontSize: 13}}>
            (Hand Timed) raced are not included
        </h6>
        <MensRecordList />
        <WomensRecordList />
        <Footer />
        </>
    )
}
