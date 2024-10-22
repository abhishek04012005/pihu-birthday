import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Event from './components/Event/Event';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import RSPV from './components/RSVP/RSPV';
import Story from './components/Story/Story';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Story />
      <Event />
      <RSPV />
      <ContactUs />
      <Footer />

      {/* <Test /> */}
    </div>
  );
}

export default App;
