import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Team from "../components/DarkMode/About/team";
import GoalSection from "../components/DarkMode/About/goal";

export default function About() {
    return (
        <>
        <Navbar />
        <>
        <GoalSection />
        <Team />
        </>
        <Footer />
        </>
    )
}