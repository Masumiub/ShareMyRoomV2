
import React from 'react';
import Link from 'next/link';
import Logo from '../assets/Logo.svg';
import Image from 'next/image';


export default function Footer() {
  return (
    <div>
      <footer className="bg-base-200 text-gray-600 pt-15">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

            {/* Main Pages Column */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Main Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/find-room" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Find a Room
                  </Link>
                </li>
                <li>
                  <Link href="/list-property" className="text-gray-600 hover:text-gray-600 transition-colors">
                    List Property
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Careers <span className="text-blue-400 text-sm">(New)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-600 transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-600 hover:text-gray-600 transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Help centre
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-600 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://angel.co" className="text-gray-600 hover:text-gray-600 transition-colors">
                    AngelList
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-gray-600 hover:text-gray-600 transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>


          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

              {/* Logo and Brand Section */}
              <div className="">
                <div className="flex flex-row items-center  gap-2">
                  <Image src={Logo} alt="logo"></Image>
                  <p className="text-gray-600 text-lg">
                    ShareMyRoom
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-sm">
                © 2025 ShareMyRoom. All rights reserved.
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


