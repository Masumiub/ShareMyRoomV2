'use client'
import React from 'react';
import Logo from '../assets/Logo.svg'
import Image from 'next/image';
import LoginForm from './LoginForm';
import Link from 'next/link';
import { authClient } from "../lib/auth-client";
import SignUpForm from './SignupForm';
import { useRouter } from "next/navigation";

const Navbar = () => {
const router = useRouter();
    const {
        data: session,
        isPending, //loading state
        error, //error object 
        refetch //refetch the session
    } = authClient.useSession();


    //const handleLogout = () => authClient.signOut();

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");      // go to home
        router.refresh();      // re-run server-side auth checks
    };



    const Links =
        <>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/FindARoom'>Find a Room</Link></li>
            <li><a>List Your Property</a></li>
            <li><a>Why ShareMyRoom</a></li>
            <li><Link href='/dashboard'>Dashboard</Link></li>
        </>


    const openLoginModal = () => {
        const modal = document.getElementById('LoginModal') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };


    const openSignUpModal = () => {
        const modal = document.getElementById('SignUpModal') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

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
                {/* <div className="navbar-end">
                    <button className='hidden md:block btn btn-ghost' onClick={openLoginModal}>Sign in</button>
                    <dialog id="LoginModal" className="modal">
                        <div className="modal-box">
                            <LoginForm></LoginForm>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <button className="btn bg-[#007BC4] hover:bg-[#01588b] text-white border-0 rounded-xl" >Get Started</button>
                    <dialog id="LoginModal" className="modal">
                        <div className="modal-box">
                            <LoginForm></LoginForm>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div> */}


                <div className="navbar-end">
                    {session ? (
                        // Show user info and logout when authenticated
                        <div className="flex items-center gap-2">
                            <span>{session.user.name}</span>
                            <button className="btn bg-[#007BC4] hover:bg-[#01588b] text-white border-0 rounded-xl" onClick={handleLogout}>
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        // Show login button when not authenticated
                        <>
                            <button className='hidden md:block btn btn-ghost' onClick={openLoginModal}>
                                Sign in
                            </button>
                            <button className="btn bg-[#007BC4] hover:bg-[#01588b] text-white border-0 rounded-xl" onClick={openSignUpModal}>
                                Get Started
                            </button>
                        </>
                    )}

                    <dialog id="LoginModal" className="modal">
                        <div className="modal-box">
                            <LoginForm></LoginForm>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                    <dialog id="SignUpModal" className="modal">
                        <div className="modal-box">
                            <SignUpForm></SignUpForm>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>

            </div>
        </div>
    );
};

export default Navbar;