import { Link } from 'react-router-dom';
import { MapPin, Menu, X, Leaf, Sun, Wind, Snowflake } from 'lucide-react';
import { useState } from 'react';
import { useSeason } from '../context/SeasonContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { season, nextSeason } = useSeason();

  const getSeasonIcon = () => {
    switch (season) {
      case 'spring': return <Leaf className="h-5 w-5 text-green-500" />;
      case 'summer': return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'autumn': return <Wind className="h-5 w-5 text-orange-500" />;
      case 'winter': return <Snowflake className="h-5 w-5 text-blue-400" />;
      default: return <Sun className="h-5 w-5" />;
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-slate-800 tracking-tight">Wayvee</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 transition font-medium">Home</Link>
            <Link to="/plan" className="text-slate-600 hover:text-blue-600 transition font-medium">Plan a Trip</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 transition font-medium">About</Link>
            
            <button 
              onClick={nextSeason} 
              className="p-2 rounded-full hover:bg-slate-100 transition shadow-sm border border-transparent hover:border-slate-200 focus:outline-none" 
              title={`Switch Season (Current: ${season})`}
            >
              {getSeasonIcon()}
            </button>

            <Link to="/plan" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-sm">
              Start Planning
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={nextSeason} 
              className="p-2 rounded-full hover:bg-slate-100 transition focus:outline-none" 
            >
              {getSeasonIcon()}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 font-medium rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/plan" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 font-medium rounded-md" onClick={() => setIsOpen(false)}>Plan a Trip</Link>
            <Link to="/about" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 font-medium rounded-md" onClick={() => setIsOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;