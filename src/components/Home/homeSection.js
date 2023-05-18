
import gifImage from '../../assets/nepal.gif';
export default function HomeSelection() {
return(
<>
<div className='HeroSection'>
    <div className='HeroImage'>
    <img src={gifImage} alt="GIF of Nepal" style={{ width: '60%', height: '40%' }} />
    </div>

    <>
        <h3 className='HeroText'>Welcome to our Nepali track and field website</h3>

    </>
</div>
<p style={{paddingTop: 20, paddingBottom: 20, textAlign: "center", justifyContent: "center", padding: 15, marginBottom: 50}}>
    
 A platform dedicated to bringing together athletes from all corners of the world. Our website is founded on the principle of unity and the belief that when like-minded individuals come together, anything is possible.
We are committed to fostering a supportive and inclusive community that celebrates the achievements of Nepali athletes. Join us on this journey as we strive to elevate Nepali Track and Field to new heights.
</p>
</>
)
}