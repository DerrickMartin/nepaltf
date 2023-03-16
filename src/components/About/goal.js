import './goalStyles.css';
import Goal from '../../assets/Goal.jpg';


export default function GoalSection() {
    return (
        <div className="goal-section">
            <img src={Goal} style={{width: '94%'}} alt="Sprinters begining race" />

            <h2>Goal</h2>
            <p> 
                Our goal is to create a space where Nepali athletes, both in Nepal and those scattered globally, can connect, share their experiences, and learn from one another.
            </p>
            <p>
                We believe that by providing a space for atheletes to share their stories, we can inspire the next generation of Nepali athletes to follow in their footsteps and achieve their dreams.
            </p>
        </div>
    )
}