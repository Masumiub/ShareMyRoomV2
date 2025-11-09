"use client"
import React, { useState } from 'react';
import { Star, Calendar, Users, Home } from 'lucide-react';

const BookingSidebar = () => {
  const [checkIn, setCheckIn] = useState('2/19/2022');
  const [checkOut, setCheckOut] = useState('2/26/2022');
  const [guests, setGuests] = useState(2);
  const [availability, setAvailability] = useState(1);

  const rooms = [
    { name: 'ROOM 1', available: true },
    { name: 'ROOM 2', available: false, status: 'Unavailable' },
    { name: 'ROOM 3', available: true, beds: 1 }
  ];

  const calculateTotal = () => {
    const weeklyRate = 75;
    const weeks = 2; // Based on check-in/check-out dates
    const bondFee = 300;
    const managementFee = 55;

    return (weeklyRate * weeks) + bondFee + managementFee;
  };

  return (
    <div className="sticky top-8">
      <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
        {/* Price and Rating */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold">$75</span>
              <span className="text-gray-600">/ week</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Star size={16} className="fill-black" />
              <span className="font-medium">5.0</span>
              <span className="text-gray-600">- 7 reviews</span>
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg">
          {/* Check-in */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-600" />
              <span className="text-sm font-medium">CHECK-IN</span>
            </div>
            <span className="text-sm">{checkIn}</span>
          </div>

          {/* Check-out */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-600" />
              <span className="text-sm font-medium">CHECKOUT</span>
            </div>
            <span className="text-sm">{checkOut}</span>
          </div>

          {/* Guests */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-600" />
              <span className="text-sm font-medium">GUESTS</span>
            </div>
            <span className="text-sm">{guests} guests</span>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Availability</span>
            <span className="text-sm text-gray-600">{availability} room</span>
          </div>

          <div className="space-y-2">
            {rooms.map((room, index) => (
              <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded">
                <div className="flex items-center gap-2">
                  <Home size={16} className="text-gray-600" />
                  <span className={`text-sm ${room.available ? 'text-gray-900' : 'text-gray-400'}`}>
                    {room.name}
                  </span>
                  {!room.available && (
                    <span className="text-xs text-gray-400">({room.status})</span>
                  )}
                  {room.beds && (
                    <span className="text-xs text-gray-600">({room.beds} bed)</span>
                  )}
                </div>

                {room.available && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span className="text-xs">BED 1</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span className="text-xs">BED 2</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-500 mt-2">
            *Room with both bed available
          </div>
        </div>

        {/* Virtual Tour */}
        <button className="w-full text-blue-600 font-medium text-sm mb-6 bg-blue-100 py-3 rounded-lg">
          Check virtual 3D tour
        </button>

        {/* Reserve Button */}
        <button className="w-full bg-[#0164A3] text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors mb-6">
          Reserve
        </button>

        {/* Price Breakdown */}
        <div className="space-y-3 text-sm border-t border-gray-200 pt-6">
          <div className="flex justify-between">
            <span>$79 x 2 weeks</span>
            <span>$158</span>
          </div>
          <div className="flex justify-between">
            <span>Bond Fee</span>
            <span>$300</span>
          </div>
          <div className="flex justify-between">
            <span>ShareMyRoom Management Fee</span>
            <span>$55</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-3">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>


      </div>

      <div className=' flex justify-center'>
        {/* Contact Button */}
        <button className="underline mt-6 text-sm text-gray-600">
          Contact to rent full house
        </button>
      </div>

    </div>
  );
};

export default BookingSidebar;