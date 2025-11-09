"use client"
import React, { useState } from 'react';
import { 
  Trees, 
  Utensils, 
  Wifi, 
  PawPrint, 
  Shirt, 
  Wind, 
  Camera, 
  Refrigerator, 
  Bike,
  ChevronDown,
  ChevronUp,
  Tv,
  Car,
  Dumbbell,
  Flame,
  Umbrella,
  BookOpen,
  Gamepad2,
  Baby,
  HeartPulse
} from 'lucide-react';

const AmenitiesList = () => {
  const [showAll, setShowAll] = useState(false);

  const allAmenities = [
    { name: 'Garden view', available: true, icon: Trees },
    { name: 'Kitchen', available: true, icon: Utensils },
    { name: 'Wifi', available: true, icon: Wifi },
    { name: 'Pets allowed', available: true, icon: PawPrint },
    { name: 'Free washer - in building', available: true, icon: Shirt },
    { name: 'Dryer', available: true, icon: Shirt },
    { name: 'Central air conditioning', available: true, icon: Wind },
    { name: 'Security cameras on property', available: true, icon: Camera },
    { name: 'Refrigerator', available: true, icon: Refrigerator },
    { name: 'Bicycles', available: true, icon: Bike },
    // Additional amenities with better icons
    { name: 'Swimming pool', available: true, icon: Umbrella },
    { name: 'Hot tub', available: true, icon: Flame },
    { name: 'Free parking', available: true, icon: Car },
    { name: 'EV charger', available: true, icon: Car },
    { name: 'Gym', available: true, icon: Dumbbell },
    { name: 'BBQ grill', available: true, icon: Flame },
    { name: 'Fire pit', available: true, icon: Flame },
    { name: 'Patio', available: true, icon: Trees },
    { name: 'Balcony', available: true, icon: Trees },
    { name: 'Backyard', available: true, icon: Trees },
    { name: 'Lake access', available: true, icon: Umbrella },
    { name: 'Beach access', available: true, icon: Umbrella },
    { name: 'Ski-in/ski-out', available: true, icon: Trees },
    { name: 'Hot water', available: true, icon: Flame },
    { name: 'Dedicated workspace', available: true, icon: BookOpen },
    { name: 'TV', available: true, icon: Tv },
    { name: 'Sound system', available: true, icon: Tv },
    { name: 'Netflix', available: true, icon: Tv },
    { name: 'Board games', available: true, icon: Gamepad2 },
    { name: 'Books', available: true, icon: BookOpen },
    { name: 'Children\'s toys', available: true, icon: Gamepad2 },
    { name: 'Baby monitor', available: true, icon: Baby },
    { name: 'Crib', available: true, icon: Baby },
    { name: 'High chair', available: true, icon: Utensils },
    { name: 'Fireplace', available: true, icon: Flame },
    { name: 'First aid kit', available: true, icon: HeartPulse },
    { name: 'Smoke alarm', available: true, icon: Camera },
  ];

  const displayedAmenities = showAll ? allAmenities : allAmenities.slice(0, 10);

  return (
    <div className="border-b border-gray-200 pb-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {displayedAmenities.map((amenity, index) => {
          const IconComponent = amenity.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-5 h-5 flex items-center justify-center ${
                amenity.available 
                  ? 'text-black' 
                  : 'text-gray-300'
              }`}>
                <IconComponent size={18} />
              </div>
              <span className={amenity.available ? 'text-gray-900' : 'text-gray-400'}>
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Show all amenities button */}
      {allAmenities.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-900 font-semibold underline flex items-center gap-1 hover:text-gray-700 transition-colors"
        >
          {showAll ? (
            <>
              Show less
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show all {allAmenities.length} amenities
              <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default AmenitiesList;