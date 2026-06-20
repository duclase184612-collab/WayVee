import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TripPlannerPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    duration: 3,
    budget: 5000000,
    foodStyle: 'local',
    accommodation: 'hotel-3',
    interests: [] as string[],
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to generate itinerary
    setTimeout(() => {
      // Store in simple local storage for the demo
      localStorage.setItem('wayvee_trip_data', JSON.stringify(formData));
      navigate('/results');
    }, 1500);
  };

  const interestsList = [
    "Culture & History", "Nature & Landscapes", "Adventure & Sports",
    "Nightlife", "Shopping", "Relaxation & Spa", "Photography", "Local Food"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
      >
        <div className="bg-blue-600 px-8 py-6 text-white">
          <h1 className="text-2xl font-bold">Plan Your Vietnamese Adventure</h1>
          <p className="text-blue-100 mt-2">Tell us what you're looking for, and we'll craft the perfect itinerary.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Destination & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Destination (in Vietnam)*</label>
              <select 
                required
                className="w-full border-slate-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
              >
                <option value="">Select a destination...</option>
                <option value="Ha Long Bay">Ha Long Bay</option>
                <option value="Hanoi">Hanoi</option>
                <option value="Hoi An">Hoi An</option>
                <option value="Da Nang">Da Nang</option>
                <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                <option value="Da Lat">Da Lat</option>
                <option value="Phu Quoc">Phu Quoc</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Duration (Days)*</label>
              <input 
                type="number" 
                min="1" 
                max="14"
                required
                className="w-full border-slate-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Total Budget (VND): {new Intl.NumberFormat('vi-VN').format(formData.budget)} ₫
            </label>
            <input 
              type="range" 
              min="1000000" 
              max="50000000" 
              step="500000"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Backpacker</span>
              <span>Comfortable</span>
              <span>Luxury</span>
            </div>
          </div>

          {/* Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Food Preferences</label>
              <select 
                className="w-full border-slate-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500"
                value={formData.foodStyle}
                onChange={(e) => setFormData({...formData, foodStyle: e.target.value})}
              >
                <option value="street">Street Food Focus</option>
                <option value="local">Local Restaurants</option>
                <option value="mixed">Mixed (Local & International)</option>
                <option value="fine">Fine Dining</option>
                <option value="veg">Vegetarian/Vegan friendly</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Accommodation Style</label>
              <select 
                className="w-full border-slate-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500"
                value={formData.accommodation}
                onChange={(e) => setFormData({...formData, accommodation: e.target.value})}
              >
                <option value="hostel">Hostel / Homestay</option>
                <option value="hotel-3">3-Star Hotel</option>
                <option value="hotel-4">4-Star Hotel / Resort</option>
                <option value="hotel-5">5-Star Luxury</option>
                <option value="boutique">Boutique Hotel</option>
              </select>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">What are you interested in?</label>
            <div className="flex flex-wrap gap-2">
              {interestsList.map(interest => (
                <button
                  type="button"
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    formData.interests.includes(interest) 
                      ? 'bg-blue-100 text-blue-800 border-blue-200' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Specific Hotel/Trip Requirements (Optional)</label>
            <textarea 
              rows={3}
              placeholder="e.g., Near the beach, wheelchair accessible, kid friendly pool..."
              className="w-full border-slate-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500"
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            />
          </div>

          {/* Submit */}
          <div className="pt-4 border-t">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-lg font-bold text-white transition flex justify-center items-center ${
                isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Magic Itinerary...
                </>
              ) : 'Generate My Dream Itinerary'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default TripPlannerPage;