import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


export default function Nepali_Records() {
    return (
        <>
        <Navbar />
        <h1>Nepali Records</h1>
        <h5>Updated as of March 12, 2023</h5> 
    
        <div style={{width: '80%', flexDirection:'column', display: 'flex'}}>
            <h4>Mens</h4>
            <div className='RecordHeader'>
                <p>Event</p>
                <p>Record</p>
                <p>Athlete</p>
                <p>Date</p>
                <p>Meet</p>
                <p>Place</p>
            </div>

            <div className='RecordListing'>
              <p>100 m</p>
              <p>10.71</p>
              <p>Ram Krishna Chaudhari</p>
              <p>09/26/1999</p>
              <p>South Asian Games</p>
              <p>Kathmandu, Nepal</p>
            </div>

            <div className='RecordListing'>
              <p>200 m</p>
              <p>21.92</p>
              <p>Ram Krishna Chaudhari</p>
              <p>12/23/1995</p>
              <p>South Asian Games</p>
              <p>Chennai, India</p>
            </div>

        </div>
        <div style={{width: '80%', flexDirection:'column', display: 'flex'}}>
            <h4>Women</h4>
            <div className='RecordHeader'>
                <p>100 meter</p>
                <p>Name</p>
                <p>Meet</p>
            </div>
        </div>
        <Footer />
        </>
    )
}
