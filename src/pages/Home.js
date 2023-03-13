import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeSelection from '../components/Home/homeSection';
import { useEffect } from 'react';

export default function Home() {
const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    return (
        <>
        <Navbar />

        <div className="App">
          <div id="google_translate_element"></div>
            <HomeSelection />
        </div>
        <Footer />
        </>
    )
}
