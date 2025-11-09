'use client';

import React, { useState } from 'react';
import { Dayjs } from 'dayjs';
import CalendarDatePicker from './CalendarDatePicker';
import dayjs from 'dayjs';
import AmenitiesList from './AmenitiesList';
import ContactForm from './ContactForm';
import Reviews from './Reviews';

// Define DateRange type locally since we don't have the pro version
type DateRange<T> = [T | null, T | null];

const ContactEnquiry = () => {
    const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
        dayjs('2022-02-19'),
        dayjs('2022-02-26'),
    ]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreeToPrivacy: false
    });

    const amenities = [
        { name: 'Garden view', available: true },
        { name: 'WiFi', available: true },
        { name: 'Free washer – in building', available: true },
        { name: 'Central air conditioning', available: true },
        { name: 'Refrigerator', available: true },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ dateRange, formData });
    };

    const formatDate = (date: Dayjs | null) => {
        return date ? date.format('MMM D, YYYY') : '';
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Amenities Section */}
            <AmenitiesList></AmenitiesList>

            {/* Calendar and Contact Form Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Section - Takes 2/3 width */}
                <div className="lg:col-span-2">
                    <div className="border-b border-gray-200 pb-8 mb-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">
                                7 nights in New York
                            </h3>
                            <p className="text-gray-600">
                                {formatDate(dateRange[0])} - {formatDate(dateRange[1])}
                            </p>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <CalendarDatePicker
                                value={dateRange}
                                onChange={setDateRange}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-xs"
                        onClick={() => setDateRange([null, null])}
                    >
                        Clear dates
                    </button>
                </div>

                {/* Contact Form Section - Takes 1/3 width */}
                <ContactForm></ContactForm>

            </div>

            <div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default ContactEnquiry;

// 'use client';

// import React, { useState } from 'react';
// import { DateRange } from '@mui/x-date-pickers-pro/models';
// import { Dayjs } from 'dayjs';
// import CalendarDatePicker from './CalendarDatePicker';
// import dayjs from 'dayjs';
// import AmenitiesList from './AmenitiesList';
// import ContactForm from './ContactForm';
// import Reviews from './Reviews';

// const ContactEnquiry = () => {
//     const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
//         dayjs('2022-02-19'),
//         dayjs('2022-02-26'),
//     ]);

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: '',
//         agreeToPrivacy: false
//     });

//     const amenities = [
//         { name: 'Garden view', available: true },
//         { name: 'WiFi', available: true },
//         { name: 'Free washer – in building', available: true },
//         { name: 'Central air conditioning', available: true },
//         { name: 'Refrigerator', available: true },
//     ];

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value, type } = e.target;
//         if (type === 'checkbox') {
//             const checked = (e.target as HTMLInputElement).checked;
//             setFormData(prev => ({ ...prev, [name]: checked }));
//         } else {
//             setFormData(prev => ({ ...prev, [name]: value }));
//         }
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle form submission
//         console.log({ dateRange, formData });
//     };

//     const formatDate = (date: Dayjs | null) => {
//         return date ? date.format('MMM D, YYYY') : '';
//     };

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//             {/* Amenities Section */}
//             <AmenitiesList></AmenitiesList>

//             {/* Calendar and Contact Form Grid */}
//             <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Calendar Section - Takes 2/3 width */}
//                 <div className="lg:col-span-2">
//                     <div className="border-b border-gray-200 pb-8 mb-8">
//                         <div className="mb-6">
//                             <h3 className="text-lg font-semibold mb-2">
//                                 7 nights in New York
//                             </h3>
//                             <p className="text-gray-600">
//                                 {formatDate(dateRange[0])} - {formatDate(dateRange[1])}
//                             </p>
//                         </div>

//                         <div className="border border-gray-200 rounded-lg overflow-hidden">
//                             <CalendarDatePicker
//                                 value={dateRange}
//                                 onChange={setDateRange}
//                             />
//                         </div>
//                     </div>
//                     <button
//                         type="button"
//                         className="btn btn-xs"
//                         onClick={() => setDateRange([null, null])}
//                     >
//                         Clear dates
//                     </button>
//                 </div>

//                 {/* Contact Form Section - Takes 1/3 width */}
//                 <ContactForm></ContactForm>

//             </div>

//             <div>
//                 <Reviews></Reviews>
//             </div>
//         </div>
//     );
// };

// export default ContactEnquiry;