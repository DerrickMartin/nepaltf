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
                <p>100 meter</p>
                <p>Name</p>
                <p>Meet</p>
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