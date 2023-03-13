import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import './Nepali_Record_Listing.css'

export default function Nepali_Records() {
    return (
        <>
        <Navbar />
        <h1>Nepali Records</h1>
        <h6>Updated as of March 12, 2023</h6> 
    
        <div className="Record_List" >
            <h3 style={{width:'100', flexDirection: 'row', borderBottomStyle: 'solid', padding: 8, borderBottomColor: 'black',}}>Mens</h3>
            <div className='RecordHeader'>
                <p className='col_listing'>Event</p>
                <p className='col_listing'>Record</p>
                <p className='col_listing'>Athlete</p>
                <p className='col_listing'>Date</p>
                <p className='col_listing'>Meet</p>
                <p className='col_listing'>Place</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>100 m</p>
                <p className='col_listing'>10.71</p>
                <p className='col_listing'>Ram Krishna Chaudhari</p>
                <p className='col_listing'>09/26/1999</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Kathmandu, Nepal</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>200 m</p>
                <p className='col_listing'>21.92</p>
                <p className='col_listing'>Ram Krishna Chaudhari</p>
                <p className='col_listing'>12/23/1995</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Chennai, India</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>400 m</p>
                <p className='col_listing'>48.32</p>
                <p className='col_listing'>Asha Ram Chaudhari</p>
                <p className='col_listing'>09/28/1990</p>
                <p className='col_listing'>Asian Games</p>
                <p className='col_listing'>Beijing, China</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>800 m</p>
                <p className='col_listing'>1:50.25</p>
                <p className='col_listing'>Som Bahadur Kumal</p>
                <p className='col_listing'>08/28/2018</p>
                <p className='col_listing'>Asian Games</p>
                <p className='col_listing'>Jakarata, Indonesia</p>
            </div>

        </div>
        <div className="Record_List" >
            <h3 style={{width:'100', flexDirection: 'row', borderBottomStyle: 'solid', padding: 8, borderBottomColor: 'black',}}>Women</h3>
            <div className='RecordHeader'>
                <p className='col_listing'>Event</p>
                <p className='col_listing'>Record</p>
                <p className='col_listing'>Athlete</p>
                <p className='col_listing'>Date</p>
                <p className='col_listing'>Meet</p>
                <p className='col_listing'>Place</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>100 m</p>
                <p className='col_listing'>10.71</p>
                <p className='col_listing'>Ram Krishna Chaudhari</p>
                <p className='col_listing'>09/26/1999</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Kathmandu, Nepal</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>200 m</p>
                <p className='col_listing'>21.92</p>
                <p className='col_listing'>Ram Krishna Chaudhari</p>
                <p className='col_listing'>12/23/1995</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Chennai, India</p>
            </div>
        </div>
        <Footer />
        </>
    )
}
