import React from 'react'
import PhotoGallery from '../components/PhotoGallery'
import BookingSidebar from '../components/BookingSidebar';
import ContactEnquiry from '../components/ContactEnquiry';
import WhereYouWillBe from '../components/WhereYouWillBe';


// Import your actual images
import RoomImage1 from '../assets/Room1.png';
import RoomImage2 from '../assets/Room2.png';
import RoomImage3 from '../assets/Room3.png';
import RoomImage4 from '../assets/Room4.png';
import RoomImage5 from '../assets/Room6.png';
import ThingsToKnow from '../components/ThingsToKnow';


export default function page() {

  const roomData = {
    images: [RoomImage1, RoomImage2, RoomImage3, RoomImage4, RoomImage5],
    title: "Bordeaux Getaway",
    reviews: 4.95,
    reviewCount: 127,
    superhost: true,
    location: "Bordeaux, France"
  };

  const amenities = [
    { icon: '✓', text: 'Entire home', description: 'You’ll have the apartment to yourself' },
    { icon: '✓', text: 'Enhanced Clean', description: 'This Host committed to our 5-step enhanced cleaning process. Show more' },
    { icon: '✓', text: 'Self check-in', description: 'Check yourself in with the keypad.' },
    { icon: '✓', text: 'Free cancellation before Feb 14' },
  ];

  const sleepArrangements = [
    { room: 'Bedroom', beds: '1 queen bed' }
  ];



  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PhotoGallery {...roomData} />


      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Host Info */}
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-2xl font-semibold mb-2">Entire rental unit hosted by Ghazal</h1>
            <p className="text-gray-600 mb-4">2 guests · 1 bedroom · 1 bed · 1 bath</p>

            {/* Amenities */}
            <div className="space-y-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {amenity.icon}
                  </div>
                  <div>
                    <div className="font-medium">{amenity.text}</div>
                    {amenity.description && (
                      <div className="text-gray-600 text-sm mt-1">{amenity.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="border-b border-gray-200 py-8">
            <p className="text-gray-700 leading-relaxed">
              Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.
              Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all
              the charms of the city thanks to its ideal location. Close to many shops, bars and
              restaurants, you can access the apartment by tram A and C and bus routes 27 and 44. ...
            </p>
            <button className="text-gray-900 font-semibold mt-2 underline">
              Show more ▼
            </button>
          </div>

          {/* Sleep Arrangements */}
          <div className="border-b border-gray-200 py-8">
            <h2 className="text-xl font-semibold mb-6">Where you will sleep</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sleepArrangements.map((arrangement, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4">
                  <div className="font-medium">{arrangement.room}</div>
                  <div className="text-gray-600 text-sm mt-1">{arrangement.beds}</div>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <BookingSidebar />
        </div>


      </div>


      <ContactEnquiry />

      <WhereYouWillBe></WhereYouWillBe>

      <ThingsToKnow></ThingsToKnow>

    </div>

  )
}
