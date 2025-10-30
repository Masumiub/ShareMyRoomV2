import React from 'react'
import SearchBar from '../components/SearchBar'
import { SlidersHorizontal } from 'lucide-react';
import mapImg from '../assets/Map.png';
import Image from 'next/image';
import HorizontalCard from '../components/HorizontalCard';
import { Fade } from 'react-awesome-reveal';
import RoomImage from '../assets/HarrisStreetRoom.png';
import RoomImage2 from '../assets/HarrisStreetRoom2.png';
import RoomImage3 from '../assets/Room5.png';

export default function page() {

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
        <>
            <div className='w-full p-3 mx-auto'>
                <div className='absolute left-1/2 -translate-x-1/2 z-20 mt-12 w-full xl:w-5xl'>
                    <SearchBar></SearchBar>
                </div>

                <div className='mt-[420px] md:mt-45 flex justify-center'>
                    <div className='flex flex-wrap gap-3'>
                        <div>
                            <select defaultValue="Price" className="select select-sm">
                                <option disabled={true}>Pick a Price</option>
                                <option>$5000</option>
                                <option>$10000</option>
                                <option>$15000</option>
                            </select>
                        </div>
                        <div>
                            <select defaultValue="Type of place" className="select select-sm">
                                <option disabled={true}>Type of place</option>
                                <option>$5000</option>
                                <option>$10000</option>
                                <option>$15000</option>
                            </select>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Free cancellation</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Wifi</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Kitchen</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Kitchen</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Air conditioning</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Washer</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Iron</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Dedicated workspace</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Free parking</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'>Dryer</button>
                        </div>
                        <div>
                            <button className='btn btn-sm'> <SlidersHorizontal size={12} /> Filters</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full md:max-w-6xl p-3 mx-auto'>
                <div className='flex flex-col md:flex-row gap-8 '>
                    <div className='w-full md:w-7/12 '>
                        {rooms.map((room, index) => (
                            <Fade key={index} cascade>
                                <HorizontalCard
                                    key={index}
                                    roomTitle={room.roomTitle}
                                    image={room.image}
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
                    <div className='w-full md:w-5/12 '>
                        <Image src={mapImg} alt="map" className='rounded-2xl '></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
