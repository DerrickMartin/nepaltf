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

            <div className='RecordListing'>
                <p className='col_listing'>1500 m</p>
                <p className='col_listing'>3:46.63</p>
                <p className='col_listing'>Gop Bahadur Adhikari</p>
                <p className='col_listing'>12/22/1993</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Dhaka, Bangladesh</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>3000 m</p>
                <p className='col_listing'>8:23.59</p>
                <p className='col_listing'>Gyan Bahadur Bohara</p>
                <p className='col_listing'>10/15/1999</p>
                <p className='col_listing'>N/A</p>
                <p className='col_listing'>New Delhi, India</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>5000 m</p>
                <p className='col_listing'>14:04.89</p>
                <p className='col_listing'>Rajendra Bahadur Bhandari</p>
                <p className='col_listing'>08/25/2004</p>
                <p className='col_listing'>Olympic Games</p>
                <p className='col_listing'>Athens, Greece</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>10000 m</p>
                <p className='col_listing'>30:30.99</p>
                <p className='col_listing'>Gopi Chandra Parki</p>
                <p className='col_listing'>10/02/2014</p>
                <p className='col_listing'>Asian Games</p>
                <p className='col_listing'>Incheon, South Korea</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>Marathon</p>
                <p className='col_listing'>2:15:03</p>
                <p className='col_listing'>Baikuntha Manadhar</p>
                <p className='col_listing'>11/22/1987</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Calcutta, India</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>3000 m steeplechase</p>
                <p className='col_listing'>Rajendra Bahadur Bhandari</p>
                <p className='col_listing'>Gop Bahadur Adhikari</p>
                <p className='col_listing'>04/05/2004</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Islamabad, Pakistan</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>Decathlon</p>
                <p className='col_listing'>5355 pts(ht)</p>
                <p className='col_listing'>Dambar Singh Kuwar</p>
                <p className='col_listing'>09/27 - 09/28/1987</p>
                <p className='col_listing'>N/A</p>
                <p className='col_listing'>Pokhara, Nepal</p>
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
