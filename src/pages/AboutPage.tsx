import { MapPin, Users, Target, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wayvee</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are revolutionizing how people plan their trips in Vietnam by combining local expertise with smart technology.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-4">
              To make travel planning effortless, personalized, and accessible for everyone. We believe that everyone deserves a perfect trip without the stress of spending hours researching.
            </p>
            <p className="text-lg text-slate-600">
              Wayvee was born out of a simple frustration: planning a trip to Vietnam involves too many tabs, too many options, and no easy way to match it all to a specific budget. We built Wayvee to be the ultimate smart itinerary creator.
            </p>
          </div>
          <div className="bg-slate-100 rounded-3xl p-8 h-80 flex items-center justify-center">
            <Target className="h-32 w-32 text-blue-600 opacity-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">For Travelers, By Travelers</h3>
            <p className="text-slate-600">Built by people who have explored every corner of Vietnam and want to share its beauty with the world.</p>
          </div>
          <div className="text-center p-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trust & Transparency</h3>
            <p className="text-slate-600">All our cost estimates are based on real-time data and honest local pricing to ensure you don't overspend.</p>
          </div>
          <div className="text-center p-8">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Local Authneticity</h3>
            <p className="text-slate-600">We prioritize authentic local experiences alongside famous attractions to give you a true taste of Vietnam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;