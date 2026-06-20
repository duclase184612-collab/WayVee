import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Wallet, Map, Star, Clock } from 'lucide-react';
import { useSeason } from '../context/SeasonContext';

const HomePage = () => {
  const { season } = useSeason();

  const seasonData = {
    spring: {
      image: "https://images.unsplash.com/photo-1596710609341-3eb2b04f36db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      color: "text-green-400",
      bgClass: "bg-green-900"
    },
    summer: {
      image: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      color: "text-blue-400",
      bgClass: "bg-blue-900"
    },
    autumn: {
      image: "https://images.unsplash.com/photo-1473656187515-5858cfbbaff4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      color: "text-orange-400",
      bgClass: "bg-orange-900"
    },
    winter: {
      image: "https://images.unsplash.com/photo-1511210471246-86d1ff8f29ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      color: "text-slate-300",
      bgClass: "bg-slate-900"
    }
  };

  const current = seasonData[season];

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative text-white overflow-hidden transition-colors duration-1000 ${current.bgClass}`}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={season}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              src={'https://plus.unsplash.com/premium_photo-1692731798042-c0cfec5c38fa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
              alt="Beautiful landscape in Vietnam" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center z-10">
          <motion.h1 
            key={`title-${season}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
          >
            Discover Vietnam, <span className={`${current.color} transition-colors duration-1000`}>Your Way</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10"
          >
            Wayvee is your smart travel companion. Let us plan a personalized itinerary based on your preferences, budget, and travel style.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/plan" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition shadow-lg inline-flex items-center"
            >
              <Compass className="mr-2 h-5 w-5" />
              Plan My Trip Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Wayvee?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We take the guesswork out of traveling so you can focus on making memories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
              <div className="bg-blue-100 p-4 rounded-full mb-6 text-blue-600">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Itineraries</h3>
              <p className="text-slate-600">Get a day-by-day plan tailored specifically to your interests and pace.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
              <div className="bg-green-100 p-4 rounded-full mb-6 text-green-600">
                <Wallet className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Budget Optimized</h3>
              <p className="text-slate-600">Tell us your budget, and we'll find the best activities, food, and stays that fit.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
              <div className="bg-amber-100 p-4 rounded-full mb-6 text-amber-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-slate-600">Stop spending hours researching. Wayvee generates your perfect trip in seconds.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Travelers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", loc: "Ha Long Bay Trip", text: "Wayvee planned a fantastic 3-day trip that exactly fit our budget while allowing us to see all the hidden gems!" },
              { name: "John D.", loc: "Hoi An Vacation", text: "The restaurant recommendations were spot on. Best Banh Mi and Cao Lau we've ever had, thanks to Wayvee!" },
              { name: "Mai T.", loc: "Da Lat Gateway", text: "I loved how easy it was to customize the accommodation. The itinerary was perfectly balanced and stress-free." },
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex mb-4 text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-slate-700 mb-6 italic">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{test.name}</h4>
                  <p className="text-sm text-slate-500">{test.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;