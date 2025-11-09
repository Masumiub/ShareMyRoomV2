"use client"
import React, { useState } from 'react';
import {
    Clock,
    Key,
    Baby,
    AlarmSmoke,
    PawPrint,
    PartyPopper,
    Shield,
    Calendar,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

type SectionKey = 'healthSafety' | 'cancellation';

const ThingsToKnow = () => {
    const [expandedSections, setExpandedSections] = useState({
        healthSafety: false,
        cancellation: false
    });

    const toggleSection = (section: SectionKey) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const houseRules = [
        { icon: Clock, text: 'Check-in: After 4:00 PM' },
        { icon: Clock, text: 'Checkout: 10:00 AM' },
        { icon: Key, text: 'Self check-in with lockbox' },
        { icon: Baby, text: 'Not suitable for infants (under 2 years)' },
        { icon: AlarmSmoke, text: 'No smoking' },
        { icon: PawPrint, text: 'No pets' },
        { icon: PartyPopper, text: 'No parties or events' },
    ];

    const healthSafety = [
        { text: 'Committed to Airbnb\'s enhanced cleaning process. Show more' },
        { text: 'Airbnb\'s social-distancing and other COVID-19-related guidelines apply' },
        { text: 'Carbon monoxide alarm' },
        { text: 'Smoke alarm' },
        { text: 'Security Deposit - If you damage the home, you may be charged up to $566' },
    ];

    const cancellationPolicy = [
        { text: 'Free cancellation before Feb 14' },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-8">Things to know</h1>

            <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>

                {/* House Rules */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">House rules</h2>
                    <div className="space-y-3">
                        {houseRules.map((rule, index) => {
                            const IconComponent = rule.icon;
                            return (
                                <div key={index} className="flex items-start gap-3">
                                    <IconComponent size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{rule.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Health & Safety */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Health & safety</h2>
                        <button
                            onClick={() => toggleSection('healthSafety')}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {expandedSections.healthSafety ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>

                    <div className="space-y-3">
                        {healthSafety.slice(0, expandedSections.healthSafety ? healthSafety.length : 1).map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Shield size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item.text}</span>
                            </div>
                        ))}

                        {!expandedSections.healthSafety && (
                            <button
                                onClick={() => toggleSection('healthSafety')}
                                className="text-gray-900 font-semibold underline flex items-center gap-1 mt-2"
                            >
                                Show more
                                <ChevronDown size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Cancellation Policy */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Cancellation policy</h2>
                        <button
                            onClick={() => toggleSection('cancellation')}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {expandedSections.cancellation ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>

                    <div className="space-y-3">
                        {cancellationPolicy.slice(0, expandedSections.cancellation ? cancellationPolicy.length : 1).map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Calendar size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item.text}</span>
                            </div>
                        ))}

                        {!expandedSections.cancellation && (
                            <button
                                onClick={() => toggleSection('cancellation')}
                                className="text-gray-900 font-semibold underline flex items-center gap-1 mt-2"
                            >
                                Show more
                                <ChevronDown size={16} />
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThingsToKnow;