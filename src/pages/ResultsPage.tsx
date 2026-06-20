import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Wallet, Coffee, Bed, Camera, CheckCircle2 } from 'lucide-react';


const ResultsPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('wayvee_trip_data');
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  if (data === null) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  // Calculate mock costs based on duration and budget
  const formatter = new Intl.NumberFormat('vi-VN');
  
   
  const accCost = Math.round((data.budget * 0.4) / 100000) * 100000;
  const foodCost = Math.round((data.budget * 0.3) / 100000) * 100000;
  const transCost = Math.round((data.budget * 0.1) / 100000) * 100000;
  const actCost = data.budget - accCost - foodCost - transCost;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Trip to {data.destination}</h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {data.duration} Days</span>
              <span className="flex items-center"><Wallet className="h-4 w-4 mr-1" /> {formatter.format(data.budget)} ₫ Budget</span>
              <span className="flex items-center"><Bed className="h-4 w-4 mr-1" /> {data.accommodation.replace('hotel-', '')} Star</span>
              <span className="flex items-center"><Coffee className="h-4 w-4 mr-1" /> {data.foodStyle} Food</span>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition flex items-center">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Save Itinerary
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Itinerary */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Day-by-Day Plan</h2>
          
          {[...Array(data.duration)].map((_, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              key={i} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="bg-slate-50 px-6 py-4 border-b flex items-center">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold">Day {i + 1}: {i === 0 ? `Arrival & Famous Sights in ${data.destination}` : `Exploring the best of ${data.destination}`}</h3>
              </div>
              
              <div className="p-6">
                <div className="relative border-l-2 border-slate-200 ml-4 space-y-8">
                  {/* Morning Activity */}
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-blue-500 border-4 border-white -left-[9px] top-1"></div>
                    <div className="text-sm font-bold text-blue-600 mb-1">09:00 AM</div>
                    <h4 className="font-bold text-lg">Morning Attraction</h4>
                    <p className="text-slate-600 mb-1">{data.destination === 'Ha Long Bay' && i === 0 ? "Cruise Embarkation & Sung Sot Cave" : 
                       data.destination === 'Hanoi' && i === 0 ? "Hoan Kiem Lake & Temple of Literature" : 
                       `${data.destination} Central Highlights`}</p>
                  </div>
                  
                  {/* Lunch */}
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-orange-500 border-4 border-white -left-[9px] top-1"></div>
                    <div className="text-sm font-bold text-orange-600 mb-1">12:30 PM</div>
                    <h4 className="font-bold text-lg">Lunch Break</h4>
                    <p className="text-slate-600 mb-1">Recommended: Local Restaurant specializing in {data.foodStyle} dishes nearby</p>
                  </div>
                  
                  {/* Afternoon Activity */}
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 rounded-full bg-green-500 border-4 border-white -left-[9px] top-1"></div>
                    <div className="text-sm font-bold text-green-600 mb-1">02:30 PM</div>
                    <h4 className="font-bold text-lg">Afternoon Exploration</h4>
                    <p className="text-slate-600 mb-1">Visit local museums, markets, or take part in a workshop matching your interests.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Cost Breakdown & Recommendations */}
        <div className="space-y-8">
          {/* Summary Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <Wallet className="h-5 w-5 mr-2 text-green-600" />
              Estimated Cost Breakdown
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-slate-600 flex items-center"><Bed className="h-4 w-4 mr-2" /> Accommodation</span>
                <span className="font-semibold">{formatter.format(accCost)} ₫</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-slate-600 flex items-center"><Coffee className="h-4 w-4 mr-2" /> Food & Dining</span>
                <span className="font-semibold">{formatter.format(foodCost)} ₫</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-slate-600 flex items-center"><Camera className="h-4 w-4 mr-2" /> Activities</span>
                <span className="font-semibold">{formatter.format(actCost)} ₫</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-slate-600 flex items-center"><MapPin className="h-4 w-4 mr-2" /> Transport</span>
                <span className="font-semibold">{formatter.format(transCost)} ₫</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg text-blue-600">{formatter.format(data.budget)} ₫</span>
              </div>
            </div>
          </motion.div>

          {/* Hotel Recommendations */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <Bed className="h-5 w-5 mr-2 text-blue-600" />
              Suggested Stays
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 border rounded-xl hover:border-blue-300 cursor-pointer transition">
                <div className="flex justify-between">
                  <h4 className="font-bold">Grand {data.destination} Resort</h4>
                  <span className="text-blue-600 font-bold ml-2">Match</span>
                </div>
                <p className="text-sm text-slate-500 mb-2">{data.accommodation.replace('hotel-', '')} Stars</p>
                <div className="text-xs text-slate-600">Perfectly matches your preference for {data.accommodation}.</div>
              </div>
              <div className="p-4 border rounded-xl hover:border-blue-300 cursor-pointer transition">
                <div className="flex justify-between">
                  <h4 className="font-bold">{data.destination} Central Hotel</h4>
                  <span className="text-blue-600 font-bold ml-2">Match</span>
                </div>
                <p className="text-sm text-slate-500 mb-2">Great Location</p>
                <div className="text-xs text-slate-600">Highly rated for its proximity to famous tourist attractions.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
