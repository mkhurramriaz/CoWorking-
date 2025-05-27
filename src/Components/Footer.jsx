import React from 'react';
import logo from "../assets/CoGrowLogo.png";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-300 mt-10  ">
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-25 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-16" alt="Logo" />
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-900 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-yellow-400" : "text-gray-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `hover:underline ${isActive ? "text-yellow-400" : "text-gray-600"}`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul className="text-gray-600 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <NavLink
                    to="https://www.instagram.com/"
                    className="hover-underline"
                  >
                    Instagram
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="#"
                    className="hover-underline "
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="hover:underline  text-gray-400 " >
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024
            <a href="https://cogrow.com/" className="hover:underline">
              Co Grow
            </a>
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  );
}
