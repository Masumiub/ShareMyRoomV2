import React from 'react';
import Logo from '../assets/Logo.svg'
import Image from 'next/image';


const Navbar = () => {

    const Links =
        <>
            <li><a>Home</a></li>
            <li><a>Find a Room</a></li>
            <li><a>List Your Property</a></li>
            <li><a>Why ShareMyRoom</a></li>
        </>



    return (
        <div>
            <div className="navbar bg-base-100  max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {Links}
                        </ul>
                    </div>

                    <Image src={Logo} alt='ShareMyRoom'></Image>
                    <h2 className='ml-2 font-bold text-2xl text-[#007BC4]'>ShareMyRoom</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='hidden md:block btn btn-ghost'>Sign in</button>
                    <button className="btn bg-[#007BC4] hover:bg-[#01588b] text-white border-0 rounded-xl">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;