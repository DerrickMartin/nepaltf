import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

import './Nepali_Record_Listing.css'

export default function Nepali_Records() {
    return (
        <>
        <Navbar />
        <h1>Nepali Records</h1>
        <h6>Updated as of March 12, 2023</h6> 
        <h6 style={{color: 'tomato', fontSize: 13}}>
            (Hand Timed) raced are not included
        </h6>
    
        <div className="Record_List" >
            <h2 style={{width:'100', flexDirection: 'row', borderBottomStyle: 'solid', padding: 8, borderBottomColor: 'black',}}>Mens</h2>
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
                <p className='col_listing'>3000 m steeple- chase</p>
                <p className='col_listing'>8:57.30</p>
                <p className='col_listing'>Rajendra Bahadur Bhandari</p>
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
            <h2 style={{width:'100', flexDirection: 'row', borderBottomStyle: 'solid', padding: 8, borderBottomColor: 'black',}}>Women</h2>
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
                <p className='col_listing'>12.19</p>
                <p className='col_listing'>Devi Maya Paneru</p>
                <p className='col_listing'>09/26/1999</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Kathmandu, Nepal</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>200 m</p>
                <p className='col_listing'>25.00</p>
                <p className='col_listing'>Devi Maya Paneru</p>
                <p className='col_listing'>12/28/1999</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Kathmandu, Nepal</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>400 m</p>
                <p className='col_listing'>59.90</p>
                <p className='col_listing'>Pramila Rijal</p>
                <p className='col_listing'>02/06/2010</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Dhaka, Bangladesh</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>800 m</p>
                <p className='col_listing'>2:11.05</p>
                <p className='col_listing'>Raj Kumari Pandey</p>
                <p className='col_listing'>10/23/1989</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Islamabad, Pakistan</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>1500 m</p>
                <p className='col_listing'>4:33.94</p>
                <p className='col_listing'>Saraswati Bhattarai</p>
                <p className='col_listing'>08/12/2016</p>
                <p className='col_listing'>Olympic Games</p>
                <p className='col_listing'>Rio de Janeiro, Brazil</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>3000 m</p>
                <p className='col_listing'>9:48.14</p>
                <p className='col_listing'>Raj Kumari Pandey</p>
                <p className='col_listing'>10/01/1990</p>
                <p className='col_listing'>Asian Games</p>
                <p className='col_listing'>Beijing, China</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>5000 m</p>
                <p className='col_listing'>16:49.98</p>
                <p className='col_listing'>Kanchhi Maya Koju</p>
                <p className='col_listing'>11/26/2010</p>
                <p className='col_listing'>Asian Games</p>
                <p className='col_listing'>Guangzhou, China</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>10000 m</p>
                <p className='col_listing'>35:03.43</p>
                <p className='col_listing'>Kanchhi Maya Koju</p>
                <p className='col_listing'>09/25/2006</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Colombo, Sri Lanka</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>Marathon</p>
                <p className='col_listing'>2:55:57</p>
                <p className='col_listing'>Kanchhi Maya Koju</p>
                <p className='col_listing'>09/24/2016</p>
                <p className='col_listing'>N/A</p>
                <p className='col_listing'>Kathmandu, Nepal</p>
            </div>

            <div className='RecordListing'>
                <p className='col_listing'>10000 m</p>
                <p className='col_listing'>35:03.43</p>
                <p className='col_listing'>Kanchhi Maya Koju</p>
                <p className='col_listing'>09/25/2006</p>
                <p className='col_listing'>South Asian Games</p>
                <p className='col_listing'>Colombo, Sri Lanka</p>
            </div>
        </div>
        <Footer />
        </>
    )
}
