import React from 'react'
import about from "../assets/about.jpg"
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={about}
                            alt="image"
                            className='rounded-2xl'
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-gray-700 text-2xl  font-bold md:text-4xl">
                        Thrive Together at 
                         <span className='text-yellow-400'> CO Grow</span>
                        
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At CO Grow, we provide an inspiring co-working environment designed for productivity and collaboration. Our modern facilities offer flexible workspaces, meeting rooms, and amenities that cater to freelancers, startups, and established businesses alike. Whether you need a quiet desk or a dynamic space to brainstorm, CO Grow has everything you need to succeed.
                        </p>
                        <p className="mt-4 text-gray-600">
                        We warmly welcome you to explore CO Grow and experience the vibrant community we’ve built. Come by for a tour, meet our friendly team, and discover how our space can elevate your workday. Join us, and let’s grow together in a place where innovation and creativity thrive!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}