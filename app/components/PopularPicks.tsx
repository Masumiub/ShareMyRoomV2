import React from 'react'
import { Fade } from 'react-awesome-reveal'
import RoomCard from './RoomCard';
import RoomImage from '../assets/HarrisStreetRoom.png';
import RoomImage2 from '../assets/HarrisStreetRoom2.png';
import RoomImage3 from '../assets/Room5.png';

export default function PopularPicks() {

    const rooms = [
        {
            roomType: "Standard",
            roomTitle: "261 Harris Street - Room 2",
            image: RoomImage,
            guestNumber: 4,
            homeType: "Entire Home",
            bedsAmount: 5,
            bathsAmount: 3,
            features: ["Wifi", "Kitchen", "Free Parking"],
            rating: 5.0,
            reviews: 318,
            pricePerNight: 325
        },
        {
            roomType: "Deluxe",
            roomTitle: "145 George Street - Suite 5",
            image: RoomImage2,
            guestNumber: 2,
            homeType: "Private Room",
            bedsAmount: 1,
            bathsAmount: 1,
            features: ["Wifi", "Kitchen"],
            rating: 4.8,
            reviews: 215,
            pricePerNight: 180
        },
        {
            roomType: "Luxury",
            roomTitle: "88 Harbour View - Penthouse",
            image: RoomImage3,
            guestNumber: 6,
            homeType: "Entire Home",
            bedsAmount: 3,
            bathsAmount: 2,
            features: ["Wifi", "Kitchen", "Free Parking"],
            rating: 4.9,
            reviews: 156,
            pricePerNight: 450
        }
    ];


    return (
        <div>
            <div className='mt-20 mb-20 w-full p-3 md:max-w-6xl mx-auto'>

                <div className='flex flex-col md:flex-row items-start justify-between gap-6'>
                    <div>
                        <h2 className='text-4xl font-semibold'>Popular picks for today</h2>
                        <p className='mt-4 text-gray-600'>Check the top favourite places to rent for today.</p>
                    </div>
                    <div>
                        <button className='btn btn-sm' >Explore All</button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                    {rooms.map((room, index) => (
                        <Fade key={index} cascade>
                        <RoomCard
                            key={index}
                            roomType={room.roomType}
                            roomTitle={room.roomTitle}
                            image = {room.image}
                            guestNumber={room.guestNumber}
                            homeType={room.homeType}
                            bedsAmount={room.bedsAmount}
                            bathsAmount={room.bathsAmount}
                            features={room.features}
                            rating={room.rating}
                            reviews={room.reviews}
                            pricePerNight={room.pricePerNight}
                        />
                        </Fade>
                    ))}
                </div>

            </div>
        </div>
    )
}
