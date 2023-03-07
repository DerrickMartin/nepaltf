import './App.css';

//Browser Router v6.4
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Roster from "./pages/Roster";
import TrackRecords from "./pages/Track-Record";
import ContactUs from "./pages/Contact-Us";
import NoPage from "./pages/NoPage";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trackrecords" element={<TrackRecords />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
