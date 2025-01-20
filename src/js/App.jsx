import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ui/Header.jsx';
import Footer from './ui/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import Events from './pages/Events.jsx'
import EventPage from './pages/EventPage.jsx';
import Contact from './pages/Contact.jsx'
import data from './data.json';

export default function App() {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/events/:type" element={<Events events={data.events} />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
