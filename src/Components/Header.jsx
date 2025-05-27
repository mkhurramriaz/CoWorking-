import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/CoGrowLogo.png";
import Hamburger from "../assets/Hamburger.png";
import CardButton from './CardButton';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="ml-5 h-20" alt="Logo" />
                    </Link>

                    {/* Navigation Links for Desktop */}
                    <ul className="items-center flex justify-center font-medium lg:flex-row lg:space-x-8 lg:mt-0 max-lg:hidden">
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                            }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                            }>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="services" className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                            }>
                                Services
                            </NavLink>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="flex items-center lg:order-2 gap-4">
                    <CardButton/>

                        {/* Hamburger Icon for Mobile */}
                        <div className="max-lg:block lg:hidden" onClick={toggleMobileMenu}>
                            <img src={Hamburger} alt="Menu" width={25} height={25} />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <ul className="flex flex-col items-center bg-white py-4 lg:hidden space-y-4">
                        <li>
                            <NavLink to="/" onClick={toggleMobileMenu} className="text-gray-500 hover:text-yellow-400">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={toggleMobileMenu} className="text-gray-500 hover:text-yellow-400">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={toggleMobileMenu} className="text-gray-500 hover:text-yellow-400">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" onClick={toggleMobileMenu} className="text-gray-500 hover:text-yellow-400">Services</NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
