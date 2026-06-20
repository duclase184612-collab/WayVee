import { MapPin, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white tracking-tight">Wayvee</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Your smart travel itinerary planner. Experience Vietnam like never before with personalized trips based on your budget and preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition"><MessageCircle className="h-5 w-5"  /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><MessageCircle className="h-5 w-5"  /></a>
              <a href="#" className="text-slate-400 hover:text-white transition"><MessageCircle className="h-5 w-5"  /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/plan" className="hover:text-blue-400 transition">Plan a Trip</Link></li>
              <li><Link to="/destinations" className="hover:text-blue-400 transition">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> support@wayvee.com</li>
              <li>123 Travel Street, Da Nang, Vietnam</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Wayvee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
