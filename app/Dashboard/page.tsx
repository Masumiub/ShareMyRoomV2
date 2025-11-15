import React from 'react'
import MyBookings from '../components/MyBookings'
import { auth } from "../api/auth/[...auth]/route";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProfileSettings from '../components/ProfileSettings';

export default async function page() {

    // const session = await auth.api.getSession({
    //     headers: await headers() 
    // });

    // if (!session?.user) {
    //     redirect("/");
    // }


    return (
        <div className='max-w-6xl mx-auto px-4 py-8'>

            <div className='mb-6 mt-4'>
                <h1 className='text-2xl font-semibold'>Welcome back, Tahmid</h1>
                <p className='mt-2 text-sm text-gray-500'>Manage your booking and profile settings here.</p>
            </div>



            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label="My Bookings" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10"><MyBookings></MyBookings></div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Support" />
                <div className="tab-content border-base-300 bg-base-100 p-10">Support</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Billings & Invoices" />
                <div className="tab-content border-base-300 bg-base-100 p-10">Billings & Invoices</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="My Documents" />
                <div className="tab-content border-base-300 bg-base-100 p-10">My Documents</div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="Profile Settings" />
                <div className="tab-content border-base-300 bg-base-100 p-10"><ProfileSettings></ProfileSettings></div>
            </div>


        </div>
    )
}
