import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ui/Header.jsx';
import Footer from './ui/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import Events from './pages/Events.jsx'
import EventPage from './pages/EventPage.jsx';
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Router basename="/portfolio-figma-afisha">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
