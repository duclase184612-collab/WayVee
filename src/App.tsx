import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TripPlannerPage from './pages/TripPlannerPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import { SeasonProvider } from './context/SeasonContext';

function App() {
  return (
    <SeasonProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-500">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/plan" element={<TripPlannerPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SeasonProvider>
  );
}

export default App;
