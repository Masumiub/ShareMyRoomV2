// import React from 'react'

// export default function SearchBar() {
//     return (
//         <div className='flex mx-auto xl:w-4xl'>
//             <input type="text" placeholder="Type here" className="input input-xl w-10/12 mx-auto" />
//         </div>
//     )
// }


'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar, Users, MapPin, Search } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState({
        male: 0,
        female: 0,
        couple: 0
    });
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const popularLocations = [
        'Sydney CBD',
        'Melbourne Central',
        'Brisbane City',
        'Perth CBD',
        'Adelaide Central',
        'Gold Coast'
    ];

    const totalGuests = guests.male + guests.female + (guests.couple * 2);

    const updateGuests = (type: 'male' | 'female' | 'couple', increment: boolean) => {
        setGuests(prev => ({
            ...prev,
            [type]: Math.max(0, prev[type] + (increment ? 1 : -1))
        }));
    };

    const handleSearch = () => {
        // Handle search logic here
        console.log({ location, checkInDate, checkOutDate, guests });
        setActiveDropdown(null);
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-2 w-11/12 max-w-4xl mx-auto">
            {/* Mobile Layout - Single column */}
            <div className="grid grid-cols-1 gap-2 md:hidden">
                {/* Location */}

                <div className="relative">
                    <div
                        className="flex items-center gap-3 p-2 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400"
                        onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
                    >
                        <MapPin size={20} className="text-gray-500" />
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Location</div>
                            <div className="text-gray-500 text-xs">
                                {location || 'Where are you going?'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'location' && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                            {popularLocations.map((loc) => (
                                <div
                                    key={loc}
                                    className="p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                                    onClick={() => {
                                        setLocation(loc);
                                        setActiveDropdown(null);
                                    }}
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Check-in Date */}
                <div className="relative">
                    <div
                        className="flex items-center gap-3 p-2 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400"
                        onClick={() => setActiveDropdown(activeDropdown === 'checkin' ? null : 'checkin')}
                    >
                        <Calendar size={20} className="text-gray-500" />
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Check in</div>
                            <div className="text-gray-500 text-xs">
                                {checkInDate ? checkInDate.toLocaleDateString() : 'Add Dates'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'checkin' && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-50">
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => {
                                    setCheckInDate(date);
                                    setActiveDropdown(null);
                                }}
                                inline
                                minDate={new Date()}
                            />
                        </div>
                    )}
                </div>

                {/* Check-out Date */}
                <div className="relative">
                    <div
                        className="flex items-center gap-3 p-2 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400"
                        onClick={() => setActiveDropdown(activeDropdown === 'checkout' ? null : 'checkout')}
                    >
                        <Calendar size={20} className="text-gray-500" />
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Check out</div>
                            <div className="text-gray-500 text-xs">
                                {checkOutDate ? checkOutDate.toLocaleDateString() : 'Add Dates'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'checkout' && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-50">
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => {
                                    setCheckOutDate(date);
                                    setActiveDropdown(null);
                                }}
                                inline
                                minDate={checkInDate || new Date()}
                            />
                        </div>
                    )}
                </div>

                {/* Guests */}
                <div className="relative">
                    <div
                        className="flex items-center gap-3 p-2 border border-gray-300 rounded-xl cursor-pointer hover:border-gray-400"
                        onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}
                    >
                        <Users size={20} className="text-gray-500" />
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Guests</div>
                            <div className="text-gray-500 text-xs">
                                {totalGuests > 0 ? `${totalGuests} guests` : 'Add Guests'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'guests' && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-50 p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Male</div>
                                        <div className="text-sm text-gray-500">Individual male guests</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateGuests('male', false)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{guests.male}</span>
                                        <button
                                            onClick={() => updateGuests('male', true)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Female</div>
                                        <div className="text-sm text-gray-500">Individual female guests</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateGuests('female', false)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{guests.female}</span>
                                        <button
                                            onClick={() => updateGuests('female', true)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Couple</div>
                                        <div className="text-sm text-gray-500">Couples sharing a room</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateGuests('couple', false)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{guests.couple}</span>
                                        <button
                                            onClick={() => updateGuests('couple', true)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search Button - Mobile */}
                <button
                    onClick={handleSearch}
                    className="btn bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl  text-lg"
                >
                    Search
                </button>

            </div>


            <div className='flex flex-row items-center gap-0'>

            {/* Desktop Layout - 4 columns */}
            <div className="hidden md:grid grid-cols-4 gap-0 w-11/12">
                {/* Location */}
                <div className="relative border-r border-gray-300">
                    <div
                        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 rounded-l-xl"
                        onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
                    >
                        {/* <MapPin size={20} className="text-gray-500" /> */}
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Location</div>
                            <div className="text-gray-500 truncate text-xs">
                                {location || 'Where are you going?'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'location' && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                            {popularLocations.map((loc) => (
                                <div
                                    key={loc}
                                    className="p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                                    onClick={() => {
                                        setLocation(loc);
                                        setActiveDropdown(null);
                                    }}
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Check-in Date */}
                <div className="relative border-r border-gray-300">
                    <div
                        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => setActiveDropdown(activeDropdown === 'checkin' ? null : 'checkin')}
                    >
                        {/* <Calendar size={20} className="text-gray-500" /> */}
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Check in</div>
                            <div className="text-gray-500 text-xs">
                                {checkInDate ? checkInDate.toLocaleDateString() : 'Add Dates'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'checkin' && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg z-50">
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => {
                                    setCheckInDate(date);
                                    setActiveDropdown(null);
                                }}
                                inline
                                minDate={new Date()}
                            />
                        </div>
                    )}
                </div>

                {/* Check-out Date */}
                <div className="relative border-r border-gray-300">
                    <div
                        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => setActiveDropdown(activeDropdown === 'checkout' ? null : 'checkout')}
                    >
                        {/* <Calendar size={20} className="text-gray-500" /> */}
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Check out</div>
                            <div className="text-gray-500 text-xs">
                                {checkOutDate ? checkOutDate.toLocaleDateString() : 'Add Dates'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'checkout' && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg z-50">
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => {
                                    setCheckOutDate(date);
                                    setActiveDropdown(null);
                                }}
                                inline
                                minDate={checkInDate || new Date()}
                            />
                        </div>
                    )}
                </div>

                {/* Guests */}
                <div className="relative ">
                    <div
                        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 rounded-r-xl"
                        onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}
                    >
                        {/* <Users size={20} className="text-gray-500" /> */}
                        <div className="flex-1 text-left">
                            <div className="text-sm font-medium text-gray-700">Guests</div>
                            <div className="text-gray-500 text-xs">
                                {totalGuests > 0 ? `${totalGuests} guests` : 'Add Guests'}
                            </div>
                        </div>
                    </div>

                    {activeDropdown === 'guests' && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-50 p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm mr-3">Male</div>

                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateGuests('male', false)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{guests.male}</span>
                                        <button
                                            onClick={() => updateGuests('male', true)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm">Female</div>

                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateGuests('female', false)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{guests.female}</span>
                                        <button
                                            onClick={() => updateGuests('female', true)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm">Couple</div>

                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateGuests('couple', false)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{guests.couple}</span>
                                        <button
                                            onClick={() => updateGuests('couple', true)}
                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            {/* Search Button - Desktop */}
            <div className="hidden md:flex justify-end w-1/12">
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-3 rounded-xl font-semibold text-lg"
                >
                    <Search></Search>
                </button>
            </div>
            </div>



            {/* Overlay to close dropdowns when clicking outside */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveDropdown(null)}
                />
            )}
        </div>
    );
}